import styled from 'styled-components';

export const StyledTooltip = styled.div`
  position: relative;

  span {
    background: #ff9000;
    border-radius: 4px;
    bottom: calc(100% + 12px);
    color: #312e38;
    font-size: 14px;
    font-weight: 500;
    left: 50%;
    opacity: 0;
    padding: 8px;
    position: absolute;
    transform: translateX(-50%);
    transition: opacity 400ms;
    visibility: hidden;
    width: 160px;

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      left: 50%;
      position: absolute;
      top: 100%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
