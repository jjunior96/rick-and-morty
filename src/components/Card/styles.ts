import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 8px;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    border-bottom: 4px solid ${theme.colors.primary};

    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      cursor: pointer;

      transition: transform ${theme.transition.default};

      &:hover {
        transform: scale(1.1);

        ${media.lessThan('medium')`
          transform: none;
        `}
      }
    }
  `}
`;

export const CardFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    justify-content: space-between;

    padding-top: ${theme.spacings.xsmall};

    > svg {
      cursor: pointer;
    }
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray_300};

    width: fit-content;
    max-width: 20rem;

    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
  `}
`;
