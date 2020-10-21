import React, { useCallback, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import queryString from 'query-string';
import * as Yup from 'yup';

import { Container, Content, AnimationContainer, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false)

  const { addToast } = useToast();

  const history = useHistory();
  const location = useLocation()

  const handleOnSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        password: Yup.string().required('Password is mandatory.'),
        password_confirmation: Yup.string().oneOf([Yup.ref('password')], 'Password must match'),
      });

      try {
        await schema.validate(data, {
          abortEarly: false,
        });


        setLoading(true)

        await api.post('/password/reset', {
          password: data.password,
          password_confirmation: data.password_confirmation,
          token: queryString.parse(location.search).token
        })

        addToast({
          type: 'success',
          title: 'Password reset successfully.',
          description: 'Enter your password to log in.',
        });

        history.push('/')
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Error resetting password',
          description: 'Double check the information provided.',
        });
      } finally {
        setLoading(false)
      }
    },
    [addToast, history, location.search],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleOnSubmit}>
            <h1>Reset Password</h1>
            <Input
              name="password"
              type="password"
              placeholder="new password"
              icon={FiLock}
            />

            <Input
              name="password_confirmation"
              type="password"
              placeholder="confirm password"
              icon={FiLock}
            />

            <Button loading={loading} type="submit">Reset</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ResetPassword;
