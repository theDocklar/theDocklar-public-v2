'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
} from './styles';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import docklar_logo from '../../../../public/docklarlogo.png';
import { GetStartedButton } from '@/components';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links, menu } from './constants';
import CTAButton from '@/components/Common/CTAButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image src={docklar_logo} alt="docklar logo" width={180} height={60} style={{ objectFit: 'contain', filter: 'contrast(1.2) brightness(1.1)' }} />
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? 'active' : ''}>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} href={link.url} />
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          <CTAButton padding="0.5rem 0.75rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
