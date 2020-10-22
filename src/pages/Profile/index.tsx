import React, { ChangeEvent, useCallback, useRef } from 'react';
import { Container, Header, Content, AvatarInput } from './styles';
import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';

interface ProfileData {
  name: string;
  email: string;
  password: string;
  old_password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const { user, updateUser } = useAuth();

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleOnSubmit = useCallback(
    async (data: ProfileData): Promise<void> => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Name is mandatory.'),
          email: Yup.string()
            .required('Email is mandatory.')
            .email('Invalid email.'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: val => !!val.length,
            then: Yup.string().required('New password required')
              .min(6, 'Must be at least 6 characters long.'),
            otherwise: Yup.string().notRequired()
          }),
          password_confirmation: Yup.string().when('old_password', {
            is: val => !!val.length,
            then: Yup.string()
              .oneOf([Yup.ref('password')], 'Password must match')
              .min(6, 'Must be at least 6 characters long.'),
            otherwise: Yup.string().notRequired()
          }),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, email, password, old_password, password_confirmation } = data

        const formData = {
          name,
          email,
          ...(old_password ?
            {
              old_password,
              password,
              password_confirmation
            } : {}
          )
        }

        const response = await api.put('/profile', formData);

        updateUser(response.data)

        history.push('/');

        addToast({
          type: 'success',
          title: 'Profile updated successfully'
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: "Error during update",
          description: 'Check for errors in the form.',
        });
      }
    },
    [addToast, history, updateUser],
  );

  const handleAvatarUpdate = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const formData = new FormData()

        formData.append('avatar', e.target.files[0])

        api
          .patch('/users/avatar', formData)
          .then(({ data }) => {
            updateUser(data)

            addToast({
              type: "success",
              title: 'Profile image updated successfully'
            })

          })
          .catch(() => {
            addToast({
              type: "error",
              title: 'Profile image could not be updated',
              description: 'File must be less than 500KB'
            })
          })
      }
    },
    [addToast, updateUser],
  )

  return (
    <Container>
      <Header>
        <div>
          <Link to="/">
            <FiArrowLeft />
          </Link>
        </div>
      </Header>

      <Content>
        <Form ref={formRef} onSubmit={handleOnSubmit} initialData={{
          name: user.name,
          email: user.email,
        }}>
          <AvatarInput>
            <img src={user.avatar_url} alt={user.name} />
            <label htmlFor="avatar" >
              <FiCamera />
              <input type="file" id="avatar" onChange={handleAvatarUpdate} />
            </label>
          </AvatarInput>

          <h1>My Profile</h1>

          <Input name="name" type="text" placeholder="name" icon={FiUser} />
          <Input name="email" containerStyle={{ marginBottom: 24 }} type="text" placeholder="email" icon={FiMail} />
          <Input
            name="old_password"
            type="password"
            placeholder="current password"
            icon={FiLock}
          />
          <Input
            name="password"
            type="password"
            placeholder="password"
            icon={FiLock}
          />
          <Input
            name="password_confirmation"
            type="password"
            placeholder="confirm password"
            icon={FiLock}
          />
          <Button type="submit">Save changes</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
