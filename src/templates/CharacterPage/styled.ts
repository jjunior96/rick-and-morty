import styled, { css } from 'styled-components';
import Link from 'next/link';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    width: 100%;
    max-width: 960px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2.4rem;

    p {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      margin-left: 3rem;
    }

    img {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: ${theme.box.shadow};
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;

      p {
        font-size: ${theme.font.sizes.xlarge};
        font-weight: ${theme.font.bold};
        margin-top: 2.4rem;
      }
    }
  `}
`;

export const Header = styled.header`
  width: 100%;
  height: 6rem;

  svg {
    font-size: 3rem;
    color: #05f2af;
    transition: color 0.4s ease-in-out;

    &:hover {
      color: ${shade(0.2, '#05f2af')};
    }
  }
`;

export const BackButton = styled(Link)``;
