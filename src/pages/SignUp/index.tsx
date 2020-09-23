import React from 'react';
import { Container, Content, Background } from './styles';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const handleOnSubmit = (data: object): void => {
    console.log('data', data);
  };

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form onSubmit={handleOnSubmit}>
          <h1>Sign Up</h1>
          <Input name="name" type="text" placeholder="name" icon={FiUser} />
          <Input name="email" type="email" placeholder="email" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="password"
            icon={FiLock}
          />
          <Button type="submit">Sign Up</Button>
        </Form>
        <a href="new">
          <FiArrowLeft size="16" />
          Back to login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
