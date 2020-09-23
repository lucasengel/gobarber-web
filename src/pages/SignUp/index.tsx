import React, { useCallback, useRef } from 'react';
import { Container, Content, Background } from './styles';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleOnSubmit = useCallback(async (data: object): Promise<void> => {
    formRef.current?.setErrors({});
    const schema = Yup.object().shape({
      name: Yup.string().required('Name is mandatory.'),
      email: Yup.string()
        .required('Email is mandatory.')
        .email('Invalid email.'),
      password: Yup.string().min(6, 'Minimum of 6 characters.'),
    });

    try {
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
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
        <a href="new">
          <FiArrowLeft size="16" />
          Back to login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
