import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  color: #666360;
  display: flex;
  padding: 16px;
  width: 100%;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #ff9000;
    `}

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: #c53030;
    `}

  & + & {
    margin-top: 8px;
  }

  > svg {
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

export const StyledError = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
    color: #c53030;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
