'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding-top: 7.5rem;

  @media (max-width: 768px) {
    padding-top: 6rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 7.38rem;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 4rem;
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-bottom: 4rem;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const ProjectCard = styled.div`
  overflow: hidden;
  height: 32rem;
  border-radius: 1rem;
  border: 1px solid var(--stroke, rgba(255, 255, 255, 0.06));
  display: flex;
  flex-direction: column;
  background: #121212;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.35);
    border-color: rgba(255, 255, 255, 0.12);
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  height: 68%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0.7) 85%);
  }

  @media (max-width: 768px) {
    height: 220px;
  }
`;

export const ImageText = styled.div`
  position: absolute;
  left: 1.25rem;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  h3 {
    margin: 0;
  }
`;

export const ProjectContent = styled.div`
  padding: 2rem;
  padding-top: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ProjectCategory = styled.span`
  display: inline-block;
  background: rgba(255, 255, 255, 0.08);
  color: var(--white);
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 500;
  width: fit-content;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2.1rem;
  color: var(--white);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ProjectDescription = styled.p`
  color: var(--link-color);
  font-size: 0.98rem;
  font-weight: 400;
  line-height: 1.5rem;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const TechnologyTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.78rem;
  font-weight: 500;
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: var(--green);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  margin-top: auto;

  &:hover {
    color: var(--emerald);
  }

  &::after {
    content: '→';
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(3px);
  }
`;

export const ViewMoreButton = styled.a`
  position: absolute;
  left: 1.25rem;
  bottom: 1.25rem;
  z-index: 1;
  background: #ffffff;
  color: #000000;
  padding: 0.7rem 1.1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: #f2f2f2;
  }
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 2rem;
  }
`;

export const Stat = styled.div`
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--green);
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: var(--light-gray);
    font-size: 1rem;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;
