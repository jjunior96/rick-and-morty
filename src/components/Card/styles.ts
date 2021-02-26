import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 360px;
    box-shadow: ${theme.box.shadow};
    border-radius: ${theme.border.radius};
    overflow: hidden;
    background-color: ${theme.colors.white};
    transition: box-shadow 0.2s;

    animation: ${appearFromBottom} 1s;

    &:hover {
      box-shadow: 0 8px 8px rgba(0, 0, 0, 0.3);
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem;
  margin: 0 auto;
`;

export const Name = styled(motion.p)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
  `}
`;

export const CardImage = styled.div`
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
