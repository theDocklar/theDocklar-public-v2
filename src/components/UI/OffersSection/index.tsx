'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  OffersGrid,
  OfferCard,
  ImageCtn,
  TextCtn,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrases,
  desktopParagraphPhrase,
  mobileParagraphPhrase,
  offers,
} from './constants';

// Offer Card Component with scroll-triggered pop-out animation
function AnimatedOfferCard({ offer, index }: { offer: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Check if card is already in viewport on mount
    if (cardRef.current && typeof window !== 'undefined') {
      const rect = cardRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInViewport && !hasAnimated) {
        setIsVisible(true);
        setTimeout(() => {
          setHasAnimated(true);
        }, index * 150);
      }
    }

    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            // Trigger animation with delay based on index
            setTimeout(() => {
              setHasAnimated(true);
              if (cardRef.current) {
                cardRef.current.classList.add('animated');
              }
            }, index * 150); // Stagger animation: 150ms delay per card
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of card is visible
        rootMargin: '0px 0px -50px 0px', // Start animation slightly before card enters viewport
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index, hasAnimated]);

  return (
    <OfferCard 
      ref={cardRef} 
      data-index={index}
      data-visible={isVisible}
      data-animated={hasAnimated}
    >
      <ImageCtn>
        <Image src={offer.illustration} alt={offer.title} fill style={{ objectFit: 'cover' }} />
        <TextCtn>
          <MaskText phrases={new Array(offer.title)} tag="h2" />
          <p>{offer.details}</p>
        </TextCtn>
      </ImageCtn>
    </OfferCard>
  );
}

const OffersSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper id="services">
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrases} tag="h1" />

          {isMobile ? (
            <MaskText phrases={mobileParagraphPhrase} tag="p" />
          ) : (
            <MaskText phrases={desktopParagraphPhrase} tag="p" />
          )}
        </Header>
        <OffersGrid>
          {offers.map((offer, i) => (
            <AnimatedOfferCard key={i} offer={offer} index={i} />
          ))}
        </OffersGrid>
      </Inner>
    </Wrapper>
  );
};

export default OffersSection;
