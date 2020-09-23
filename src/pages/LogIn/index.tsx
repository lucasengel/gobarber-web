import React from 'react';
import { Container, Content, Background } from './styles';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const LogIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <form>
          <h1>Log in</h1>
          <Input name="email" type="email" placeholder="email" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="password"
            icon={FiLock}
          />
          <Button type="submit">Submit</Button>
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

export default LogIn;
