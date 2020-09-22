import styled from 'styled-components';

export const StyledInput = styled.div`
  align-items: center;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  display: flex;
  padding: 16px;
  width: 100%;

  & + & {
    margin-top: 8px;
  }

  svg {
    color: #666360;
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
