import styled, { css } from 'styled-components';

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
