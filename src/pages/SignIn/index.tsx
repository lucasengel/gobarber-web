import React from 'react';
import { Container, Content, Background } from './styles';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <form>
          <h1>Log in</h1>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button type="submit">Submit</button>
          <a href="forgot">Forgot my password</a>
        </form>
        <a href="new">
          <FiLogIn size="16" />
          Create account
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
