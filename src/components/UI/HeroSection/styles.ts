'use client';
import { styled } from 'styled-components';
import hero_background from '../../../../public/images/grid_background.png';

export const Wrapper = styled.section`
  margin-top: 6.25rem;
`;

export const Inner = styled.div`
  background: url(${hero_background.src}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 84rem;
  margin: 0 auto;
  text-align: center;
  background-position: top center;
  background-size: contain;
  padding: 0 1rem;
`;

export const Pill = styled.div`
  display: flex;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 0.2px solid #989898;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;

  span {
    color: var(--light-gray);
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;

  h1 {
    font-size: 6rem;
    font-weight: 400;
  }

  p {
    max-width: 64rem;
    color: #bdbdbd;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding-bottom: 1.5rem;
    h1 {
      font-size: 2.5rem;
      font-weight: 400;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const LogosPane = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.25rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid var(--stroke, rgba(255, 255, 255, 0.06));
  background: rgba(255, 255, 255, 0.03);

  img {
    height: 28px;
    width: auto;
    opacity: 0.9;
    filter: brightness(0) invert(1) saturate(0) contrast(1.1);
  }
`;

// Removed text badges in favor of existing logo strip for now
