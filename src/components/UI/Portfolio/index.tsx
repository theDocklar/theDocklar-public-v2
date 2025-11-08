'use client';
import {
  Wrapper,
  Inner,
  Header,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectCategory,
  ProjectTitle,
  ProjectDescription,
  TechnologiesContainer,
  TechnologyTag,
  ProjectLink,
  Stats,
  Stat,
  ViewMoreButton,
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

const Portfolio = () => {
  const isMobile = useIsMobile();

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

        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImage style={{ backgroundImage: `url(${project.image})` }}>
            
              </ProjectImage>
              <ProjectContent>
                <ProjectCategory>{project.category}</ProjectCategory>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
             
                {project.link && (
                  <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </ProjectLink>
                )}
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>

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
