import styled from 'styled-components';
import backgroundImg from '../../assets/sign-up-background.png';
import { shade } from 'polished';

export const Container = styled.div`
  align-items: stretch;
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  max-width: 700px;
  width: 100%;

  form {
    margin: 80px 0;
    text-align: center;
    width: 340px;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: background-color 250ms ease-in-out;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    align-items: center;
    color: #f4ede8;
    display: flex;
    margin-top: 24px;
    text-decoration: none;
    transition: background-color 250ms ease-in-out;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat center;
  flex: 1;
  background-size: cover;
`;
