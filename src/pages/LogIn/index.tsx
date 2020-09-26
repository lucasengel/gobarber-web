import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, Content, AnimationContainer, Background } from './styles';
import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';

interface LoginFormData {
  email: string;
  password: string;
}

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { logIn } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

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

        await logIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }

        addToast({
          title: 'Authentication error',
          description: 'Check your user and password.',
          type: 'error',
        });
      }
    },
    [logIn, addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
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
          <Link to="/sign-up">
            <FiLogIn size="16" />
            Create account
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default LogIn;
