import styled, { css } from "styled-components";

const StyledLayout = css`
  margin: 0 auto;
  max-width: 100vw;
  width: 1368px;
  padding: 0 2.4rem;
`;

export const PageLayoutContainer = styled.main`
  ${StyledLayout}
  grid-area: content;
`;

export const FooterLayoutContainer = styled.div`
  ${StyledLayout}

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLayoutContainer = styled.div`
  ${StyledLayout}

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;

  svg {
    font-size: 3.2rem;
    min-width: 3.2rem;
    fill: ${({ theme }) => theme.COLORS.LIGHT_100};
    cursor: pointer;
  }

  button {
    width: 21.6rem;
    min-width: fit-content;
  }

  @media (max-width: 900px) {
    button {
      svg {
        display: none;
      }
    }
  }
`;
