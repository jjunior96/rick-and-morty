import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Error = styled.div`
  ${({ theme }) => css`
    height: 2rem;
    margin: 0;
    padding: 0;

    svg {
      margin: 0;
      padding: 0;
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.red_300};
    }
  `}
`;
