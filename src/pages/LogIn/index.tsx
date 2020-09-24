import React, { useCallback, useRef } from 'react';
import { Container, Content, Background } from './styles';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface LoginFormData {
  email: string;
  password: string;
}

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { logIn } = useAuth();

  const handleOnSubmit = useCallback(
    async (data: LoginFormData) => {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email is mandatory.')
          .email('Invalid email.'),
        password: Yup.string().required('Password is mandatory.'),
      });

      try {
        await schema.validate(data, {
          abortEarly: false,
        });

        logIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
      }
    },
    [logIn],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleOnSubmit}>
          <h1>Log in</h1>
          <Input name="email" type="text" placeholder="email" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="password"
            icon={FiLock}
          />
          <Button type="submit">Submit</Button>
          <a href="forgot">Forgot my password</a>
        </Form>
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
