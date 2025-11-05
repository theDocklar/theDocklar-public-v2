'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  background: var(--Background);
  color: var(--white);
  padding: 8rem 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 1rem;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: var(--light-gray);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ContactInfo = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: var(--white);

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export const ContactItem = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

export const ContactTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--green);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ContactValue = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: var(--white);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ContactDescription = styled.p`
  font-size: 0.9rem;
  color: var(--light-gray);

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--white);
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: var(--white);
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--green);
  }

  &::placeholder {
    color: var(--light-gray);
  }
`;

export const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: var(--white);
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--green);
  }

  option {
    background: var(--Background);
    color: var(--white);
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: var(--white);
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--green);
  }

  &::placeholder {
    color: var(--light-gray);
  }
`;

export const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: var(--green);
  color: #000000;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: var(--emerald);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
  }
`;

export const SuccessMessage = styled.div`
  padding: 1rem;
  background: rgba(72, 214, 76, 0.1);
  border: 1px solid var(--emerald);
  border-radius: 0.5rem;
  color: var(--emerald);
  text-align: center;
  margin-bottom: 1rem;
`;

export const ErrorMessage = styled.div`
  padding: 1rem;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid #ff4444;
  border-radius: 0.5rem;
  color: #ff4444;
  text-align: center;
  margin-bottom: 1rem;
`;
