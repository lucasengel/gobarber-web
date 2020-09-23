import styled, { css } from 'styled-components';

interface StyledInputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const StyledInput = styled.div<StyledInputProps>`
  align-items: center;
  background: #232129;
  border: 2px solid #232129;
  border-radius: 10px;
  color: #666360;
  display: flex;
  padding: 16px;
  width: 100%;

  ${props =>
    props.isFocused === true &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}

  ${props =>
    props.isFilled === true &&
    css`
      color: #ff9000;
    `}

  & + & {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }

  input {
    background: transparent;
    border: 0;
    color: #f4ede8;
    flex: 1;

    &::placeholder {
      color: #666360;
    }
  }
`;
