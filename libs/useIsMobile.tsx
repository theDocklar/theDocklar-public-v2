'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const useIsMobile = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    checkIsMobile();

    const handleResize = () => {
      checkIsMobile();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pathname]);

  return isMobile;
};
