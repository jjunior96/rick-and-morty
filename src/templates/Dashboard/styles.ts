import styled, { css } from 'styled-components';
import { Form } from '@unform/web';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  margin-top: 2.4rem;
  padding: 0 2.4rem;
`;

export const Title = styled(motion.div)`
  margin-bottom: 1.6rem;
  text-align: center;
  color: #05f2af;
  font-weight: bold;
`;

export const Result = styled.div`
  margin-top: 2.4rem;
  width: 100%;
  max-width: 960px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FormContainer = styled(Form)`
  ${({ theme }) => css`
    display: flex;

    div {
      flex: 1;
    }

    button {
      width: 100%;
      max-width: 6rem;
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

export const Error = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: 0 auto;
    color: #f25c84;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    justify-content: center;
    align-items: center;
  `}
`;
