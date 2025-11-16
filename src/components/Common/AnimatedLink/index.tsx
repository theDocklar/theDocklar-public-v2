'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Div, Word, Span, AbsoluteContainer } from './styles';

type AnimationProps = {
  rest: {
    y: number;
  };
  hover: {
    y: number;
    transition: {
      duration: number;
      ease: number[];
      type: string;
    };
  };
};

const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.005,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.005,
    },
  },
};

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -25,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};

const letterAnimationTwo = {
  rest: {
    y: 25,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};

const AnimatedLink = ({ title, href }: { title: string; href?: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  const content = (
    <Div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatedWord
        title={title}
        animations={letterAnimation}
        isHovered={isHovered}
      />
      <AbsoluteContainer>
        <AnimatedWord
          title={title}
          animations={letterAnimationTwo}
          isHovered={isHovered}
        />
      </AbsoluteContainer>
    </Div>
  );

  if (href) {
    // Handle hash links (anchor links)
    if (href.startsWith('#')) {
      const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = href.substring(1);
        
        // If we're on the home page, just scroll
        if (pathname === '/') {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } else {
          // If we're on a different page, navigate to home first
          router.push('/');
          // Wait for navigation then scroll to hash
          setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 300);
        }
      };
      
      return (
        <a 
          href={pathname === '/' ? href : `/${href}`}
          onClick={handleHashClick}
          style={{ textDecoration: 'none', cursor: 'pointer' }}
        >
          {content}
        </a>
      );
    }
    
    // Handle internal routes - use Next.js Link
    if (href.startsWith('/')) {
      return (
        <Link href={href} style={{ textDecoration: 'none' }}>
          {content}
        </Link>
      );
    }
    
    // External links
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        {content}
      </a>
    );
  }

  return content;
};

export default AnimatedLink;

const AnimatedWord = ({
  title,
  animations,
  isHovered,
}: {
  title: string;
  animations: AnimationProps;
  isHovered: boolean;
}) => (
  <Word
    variants={titleAnimation}
    initial="rest"
    animate={isHovered ? 'hover' : 'rest'}
  >
    {title.split('').map((char, i) =>
      char === ' ' ? (
        <Span key={i}>&nbsp;</Span>
      ) : (
        <Span variants={animations} key={i}>
          {char}
        </Span>
      )
    )}
  </Word>
);
