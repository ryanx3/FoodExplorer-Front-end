import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100% !important;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  line-height: 100%;

  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 8px;

  > input {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    padding-left: 1.2rem;
    border-radius: 0.5rem;
    border: none;

    font-size: 1.6rem;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-family: Roboto;
      font-size: 1.6rem;
      font-weight: 400;
    }
    &:focus-within {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;

export const InputFile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > label {
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.8rem;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 1.2rem 1.4rem;
    border-radius: 0.8rem;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2.4rem;
    }

    span {
      white-space: nowrap;
      font-family: inherit;
      font-size: 1.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  input {
    display: none;
  }
`;