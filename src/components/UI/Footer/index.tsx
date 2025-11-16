'use client';
import Image from 'next/image';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';
import docklar_logo from '../../../../public/theboat.png';

const linksArr = [
  {
    title: 'About us',
    links: ['Our Company', 'Careers', 'Press kits'],
  },
  {
    title: 'Legal',
    links: ['Terms of use', 'Privacy policy', 'About us'],
  },
  {
    title: 'About us',
    links: ['Contact us', 'FAQ'],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  QRImageCtn,
  TextCtn,
  IconCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
  ContactInfo,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
       
        <FooterMainContent>
          <FooterMiddle>
          <FooterLogo>
          <Image src={docklar_logo} alt="docklar logo" width={200} height={80} style={{ objectFit: 'contain', filter: 'contrast(1.2) brightness(1.1)' }} />
        </FooterLogo>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            {/* <ContactInfo>
              <a href="mailto:info@theboatgrp.com">info@theboatgrp.com</a>
              <p >+94 777111770</p>
            </ContactInfo> */}
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              theBOAT Ceylon pvt LTD.
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
