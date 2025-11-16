'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import StyledComponentsRegistry from '../../../libs/registry';
import { GlobalStyles } from './GlobalStyles';
import { Footer, Header, Preloader } from '..';
import { useState, useEffect } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Check if preloader has already been shown in this session
    const preloaderShown = sessionStorage.getItem('preloaderShown');
    
    if (preloaderShown === 'true') {
      // If preloader was already shown, skip it
      setComplete(true);
    } else {
      // Mark that preloader will be shown
      sessionStorage.setItem('preloaderShown', 'true');
    }
  }, []);

  const handlePreloaderComplete = (value: boolean) => {
    setComplete(value);
  };

  return (
    <StyledComponentsRegistry>
      <ReactLenis
        root
        easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
      >
        <GlobalStyles />
        {!complete && <Preloader setComplete={handlePreloaderComplete} />}
        <div className={complete ? 'complete' : 'not_complete'}>
          <Header />
          {children}
          <Footer />
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export default Layout;
