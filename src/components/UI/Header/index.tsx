'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
} from './styles';
import docklar_logo from '../../../../public/theboat.png';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { links } from './constants';
import CTAButton from '@/components/Common/CTAButton';

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image src={docklar_logo} alt="docklar logo" width={180} height={60} style={{ objectFit: 'contain', filter: 'contrast(1.2) brightness(1.1)' }} />
        </LogoContainer>
        <Nav>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} href={link.url} />
          ))}
        </Nav>
        <CallToActions>
          <CTAButton padding="0.5rem 0.75rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
