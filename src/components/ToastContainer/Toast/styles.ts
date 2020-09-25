import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
};

export const Container = styled(animated.div)<ToastProps>`
  ${(props) => toastTypeVariations[props.type || 'info']}

  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  padding: 16px 30px 16px 16px;
  position: relative;
  width: 360px;

  & + & {
    margin-top: 8px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      font-size: 14px;
      line-height: 20px;
      margin-top: 4px;
      opacity: 0.8;
    }
  }

  button {
    background: transparent;
    border: 0;
    color: inherit;
    position: absolute;
    opacity: 0.6;
    right: 16px;
    top: 19px;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
