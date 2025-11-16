'use client';
import { useRef, useEffect, useState } from 'react';
import {
  Wrapper,
  Inner,
  Header,
  ProjectsContainer,
  ProjectCard3D,
  ProjectImage3D,
  ProjectContent,
  ProjectCategory,
  ProjectTitle,
  ProjectDescription,
  ProjectLink,
  Stats,
  Stat,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  projects,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from './constants';


// Parallax Card Component with 3D tilt effect and scroll-triggered pop-out animation
function ParallaxCard({ project, index, scrollY, mousePosition }: { project: any; index: number; scrollY: number; mousePosition: { x: number; y: number } }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current && imageRef.current && hasAnimated) {
        const rect = cardRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInView) {
          const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
          const parallaxOffset = (scrollProgress - 0.5) * 30;
          
          if (!isHovered) {
            imageRef.current.style.transform = `translateY(${parallaxOffset * (index % 2 === 0 ? 1 : -1)}px) scale(${1 + scrollProgress * 0.05})`;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current && isHovered && hasAnimated) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [index, isHovered, hasAnimated]);

  return (
    <ProjectCard3D 
      ref={cardRef} 
      data-index={index}
      data-visible={isVisible}
      data-animated={hasAnimated}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (cardRef.current && hasAnimated) {
          cardRef.current.style.transform = '';
        }
      }}
    >
      <ProjectImage3D ref={imageRef} style={{ backgroundImage: `url(${project.image})` }}>
        <div className="image-overlay" />
      </ProjectImage3D>
      <ProjectContent>
        <ProjectCategory>{project.category}</ProjectCategory>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        {project.link && (
          <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
            View Project →
          </ProjectLink>
        )}
      </ProjectContent>
    </ProjectCard3D>
  );
}

const Portfolio = () => {
  const isMobile = useIsMobile();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stats = [
    { number: '20+', subtitle: 'Web Solutions' },
    { number: '3+', subtitle: 'countries' },
    { number: '10+', subtitle: 'clients' },
    { number: '1+', subtitle: 'years' },
  ];

  return (
    <Wrapper id="portfolio">
      <Inner>
        <Header>
          {isMobile ? (
            <>
              <MaskText phrases={mobileHeaderPhrase} tag="h1" />
              <MaskText phrases={mobileParagraphPhrase} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={desktopHeaderPhrase} tag="h1" />
              <MaskText phrases={desktopParagraphPhrase} tag="p" />
            </>
          )}
        </Header>

        <ProjectsContainer>
          {projects.map((project, index) => (
            <ParallaxCard 
              key={project.id} 
              project={project} 
              index={index} 
              scrollY={scrollY}
              mousePosition={mousePosition}
            />
          ))}
        </ProjectsContainer>

        <Stats>
          {stats.map((stat, i) => (
            <Stat key={i}>
              <MaskText phrases={new Array(stat.number)} tag="h1" />
              <MaskText phrases={new Array(stat.subtitle)} tag="p" />
            </Stat>
          ))}
        </Stats>
      </Inner>
    </Wrapper>
  );
};

export default Portfolio;

