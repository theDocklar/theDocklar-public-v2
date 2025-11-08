'use client';
import Image from 'next/image';
import { Wrapper, Inner, Pill, HeroTextContainer, LogosPane } from './styles';
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import { GetStartedButton } from '@/components';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from './constants';
import { ParallaxImages } from '../Featured/styles';
import ParallaxText from '@/components/Common/ParallaxImages';

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <Pill>
          <span>Introducing theBOAT Solutions Studio</span>
          {/* <Image src={ic_chevron_right} alt="chevron-right" /> */}
        </Pill>
        <HeroTextContainer>
          {isMobile ? (
            <>
              <MaskText phrases={mobilePhrases} tag="h1" />
              <MaskText phrases={mobileParagraphPhrases} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={phrases} tag="h1" />
              <MaskText phrases={paragraphPhrases} tag="p" />
            </>
          )}
        </HeroTextContainer>
        <GetStartedButton padding="1rem 2rem" />
        <LogosPane>
          {['React', 'Next.js', 'Wordpress', 'Flutter','shopify', 'figma'].map((name) => (
            <Image key={name} src={`/images/${name}.png`} alt={`${name} logo`} width={120} height={28} />
          ))}
        </LogosPane>
        {/* <h2>Featured and Seen in</h2>
        <ParallaxImages>
          <ParallaxText baseVelocity={-4}>
            <Image src="/images/companies.png" alt="companies" width={100} height={64} />
          </ParallaxText>
        </ParallaxImages> */}
      </Inner>
      <Inner>
        
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
