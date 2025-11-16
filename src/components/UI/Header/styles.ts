'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 1rem 0;
  border-bottom: 0.5px solid #3d3d3d;

  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr auto;
    gap: 1rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-self: start;

  img {
    object-fit: contain;
    filter: contrast(1.2) brightness(1.1);
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    width: auto;

    img {
      width: 140px !important;
      height: auto !important;
    }
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  position: relative;
  z-index: 100;

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem;
    cursor: pointer;

    div {
      position: absolute;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      width: 250px;
      height: 300px;
      border-radius: 20px;
      z-index: 1;
      top: 50px;
      right: -25px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    img {
      position: relative;
      z-index: 2;
      object-fit: cover;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 3.75rem;
  position: relative;
  justify-self: center;

  a {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AbsoluteLinks = styled(Link)`
  position: absolute;
  top: 40px;
  color: var(--link-color);
  font-size: 1rem;
  font-weight: 400;
`;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-self: end;

  div {
    span {
      color: var(--white);
      font-size: 1rem;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    justify-self: end;
    position: static;
  }
`;
