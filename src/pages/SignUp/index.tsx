import React, { useCallback, useRef } from 'react';
import { Container, Content, AnimationContainer, Background } from './styles';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleOnSubmit = useCallback(
    async (data: SignUpData): Promise<void> => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Name is mandatory.'),
          email: Yup.string()
            .required('Email is mandatory.')
            .email('Invalid email.'),
          password: Yup.string().min(6, 'Minimum of 6 characters.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'User created successfully',
          description: 'you can log in now.',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: "Couldn't sign up",
          description: 'Check for errors in the form.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleOnSubmit}>
            <h1>Sign Up</h1>
            <Input name="name" type="text" placeholder="name" icon={FiUser} />
            <Input name="email" type="text" placeholder="email" icon={FiMail} />
            <Input
              name="password"
              type="password"
              placeholder="password"
              icon={FiLock}
            />
            <Button type="submit">Sign up</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft size="16" />
            Back to login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
