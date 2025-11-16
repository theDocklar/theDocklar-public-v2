'use client';
import { styled } from 'styled-components';
import grid_background from '../../../../public/images/offer_card_grid_1.png';

export const Wrapper = styled.section``;

export const Inner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 12.38rem auto 0;

  @media (max-width: 768px) {
    margin-top: 6.44rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 6.75rem;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: #989898;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const ImageCtn = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: hidden;

  &::after {
    position: absolute;
    content: '';
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.7) 85%);
    z-index: 1;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const TextCtn = styled.div`
  position: absolute;
  left: 1.5rem;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.1rem;
    color: var(--white);
  }

  p {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const OfferCard = styled.div`
  overflow: hidden;
  height: 31.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--stroke, rgba(255, 255, 255, 0.04));
  display: flex;
  flex-direction: column;
  background: url(${grid_background.src}) #131313 no-repeat;
  position: relative;
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), 
              box-shadow 0.6s cubic-bezier(0.23, 1, 0.32, 1), 
              border-color 0.6s ease,
              opacity 0.8s ease,
              filter 0.8s ease;
  transform-style: preserve-3d;
  will-change: transform, opacity, filter;
  opacity: 0;
  transform: translateY(80px) scale(0.85) rotateX(15deg);
  filter: blur(8px);

  /* Initial hidden state */
  &[data-visible="false"] {
    opacity: 0;
    transform: translateY(80px) scale(0.85) rotateX(15deg);
    filter: blur(8px);
  }

  /* Animation trigger state */
  &[data-visible="true"] {
    opacity: 0.3;
    filter: blur(4px);
  }

  /* Final animated state - pop out effect with bounce */
  &[data-animated="true"] {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0deg);
    filter: blur(0px);
  }

  &:hover {
    transform: translateY(-8px) scale(1.02) rotateX(0deg) !important;
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 768px) {
    height: 20rem;
    min-height: 20rem;
    transform: translateY(40px) scale(0.9);
    
    &[data-animated="true"] {
      transform: translateY(0) scale(1);
    }
    
    &:hover {
      transform: translateY(-4px) scale(1.01) !important;
    }
  }
`;
