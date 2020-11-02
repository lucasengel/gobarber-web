import { fireEvent, render, wait } from '@testing-library/react';
import React from 'react';
import Input from '../../components/Input';
import 'jest-styled-components';

jest.mock('@unform/core', () => ({
  useField: () => ({
    fieldname: 'email',
    defaultValue: '',
    error: '',
    registerField: jest.fn(),
  }),
}));

describe('Input component', () => {
  it('should be able to render an Input', () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="email" />,
    );

    expect(getByPlaceholderText('email')).toBeTruthy();
  });

  it('should render highlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="email" />,
    );

    const inputContainer = getByTestId('input-container');
    const inputField = getByPlaceholderText('email');

    fireEvent.focus(inputField);

    await wait(() => {
      expect(inputContainer).toHaveStyleRule('border-color', '#ff9000');
      expect(inputContainer).toHaveStyleRule('color', '#ff9000');
    });

    fireEvent.blur(inputField);

    await wait(() => {
      expect(inputContainer).not.toHaveStyleRule('border-color', '#ff9000');
      expect(inputContainer).not.toHaveStyleRule('color', '#ff9000');
    });
  });

  it('should maintain filled input highlight on blur', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="email" />,
    );

    const inputContainer = getByTestId('input-container');
    const inputField = getByPlaceholderText('email');

    fireEvent.change(inputField, { target: { value: 'john@got.com' } });

    fireEvent.blur(inputField);

    await wait(() => {
      expect(inputContainer).toHaveStyleRule('color', '#ff9000');
    });
  });
});
