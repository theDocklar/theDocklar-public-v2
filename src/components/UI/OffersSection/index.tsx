'use client';
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
            <OfferCard key={i}>
              <ImageCtn>
                <Image src={offer.illustration} alt={offer.title} fill style={{ objectFit: 'cover' }} />
                <TextCtn>
                  <MaskText phrases={new Array(offer.title)} tag="h2" />
                  <p>{offer.details}</p>
                </TextCtn>
              </ImageCtn>
            </OfferCard>
          ))}
        </OffersGrid>
      </Inner>
    </Wrapper>
  );
};

export default OffersSection;
