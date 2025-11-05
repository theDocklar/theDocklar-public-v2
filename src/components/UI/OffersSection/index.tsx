'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  Offers,
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
        <Offers>
          {offers.slice(0, 1).map((offer, i) => (
            <OfferCard key={i}>
              <ImageCtn>
                <Image src={offer.illustration} alt="illustration" />
                <TextCtn>
                  <MaskText phrases={new Array(offer.title)} tag="h2" />
                  <p>{offer.details}</p>
                </TextCtn>
              </ImageCtn>
            </OfferCard>
          ))}
        </Offers>
        <Offers>
          {offers.slice(1, 2).map((offer, i) => (
            <OfferCard key={i}>
              <ImageCtn>
                <Image src={offer.illustration} alt="illustration" />
                <TextCtn>
                  <MaskText phrases={new Array(offer.title)} tag="h2" />
                  <p>{offer.details}</p>
                </TextCtn>
              </ImageCtn>
            </OfferCard>
          ))}
        </Offers>
        <Offers>
          {offers.slice(2, 3).map((offer, i) => (
            <OfferCard key={i}>
              <ImageCtn>
                <Image src={offer.illustration} alt="illustration" />
                <TextCtn>
                  <MaskText phrases={new Array(offer.title)} tag="h2" />
                  <p>{offer.details}</p>
                </TextCtn>
              </ImageCtn>
            </OfferCard>
          ))}
        </Offers>
        <Offers>
          {offers.slice(3, 4).map((offer, i) => (
            <OfferCard key={i}>
              <ImageCtn>
                <Image src={offer.illustration} alt="illustration" />
                <TextCtn>
                  <MaskText phrases={new Array(offer.title)} tag="h2" />
                  <p>{offer.details}</p>
                </TextCtn>
              </ImageCtn>
            </OfferCard>
          ))}
        </Offers>
        <Offers>
          {offers.slice(4, 5).map((offer, i) => (
            <OfferCard key={i}>
              <ImageCtn>
                <Image src={offer.illustration} alt="illustration" />
                <TextCtn>
                  <MaskText phrases={new Array(offer.title)} tag="h2" />
                  <p>{offer.details}</p>
                </TextCtn>
              </ImageCtn>
            </OfferCard>
          ))}
        </Offers>
      </Inner>
    </Wrapper>
  );
};

export default OffersSection;
