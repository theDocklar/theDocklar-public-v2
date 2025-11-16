'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  background: var(--Background);
  color: var(--white);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Inner = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  padding: 0 2em;
  overflow: hidden;
  height: 25em;

  img {
    width: 25em;
    height: 25em;
    object-fit: contain;
  }

  div {
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 0.05em;

    div {
      font-family: var(--font-leaguespartan), 'League Spartan', sans-serif;
      font-weight: 300;
      font-size: 15em;
      letter-spacing: -0.02em;
      line-height: 0.9;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    height: 15rem;
    img {
      width: 7rem;
      height: 100%;
    }

      div {
        gap: 0.3rem;
        div {
          font-family: var(--font-leaguespartan), 'League Spartan', sans-serif;
          font-weight: 600;
          font-size: 2.5rem;
          letter-spacing: 0;
          line-height: 1;
        }
      }
  }
`;

export const SecondOverlay = styled.div`
  background: var(--emerald);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9990;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
