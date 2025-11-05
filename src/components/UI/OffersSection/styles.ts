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
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;

  &::after {
    position: absolute;
    content: '';
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.7) 85%);
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    z-index: 0;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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

export const Offers = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  &:last-child {
    margin-top: 2rem;

    div:first-child {
      flex: 1;

      ${ImageCtn} {
        flex: 2;
      }

      ${TextCtn} {
        height: 1em;
        flex: 1;
      }
    }

    div:last-child {
      flex: 2;

      ${ImageCtn} {
        flex: 2;
        margin-left: auto;
      }

      ${TextCtn} {
        height: 1em;
        flex: 1;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    &:last-child {
      div:first-child {
        flex: 1;

        ${ImageCtn} {
          flex: 1;
        }

        ${TextCtn} {
          margin-top: 4rem;
        }
      }

      div:last-child {
        flex: 1;

        ${ImageCtn} {
          flex: 1;
          margin-left: auto;
        }

        ${TextCtn} {
          margin-top: 2rem;
        }
      }
    }
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

  &:first-child {
    flex: 2;
  }

  &:nth-child(2) {
    flex: 1;

    ${ImageCtn} {
      margin-left: 2.5rem;
      width: 100%;
    }
  }
`;
