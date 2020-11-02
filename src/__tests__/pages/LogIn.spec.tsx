import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import LogIn from '../../pages/LogIn';

const mockedHistoryPush = jest.fn();
const mockedAddToast = jest.fn();
const mockedLogIn = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../hooks/toast', () => ({
  useToast: () => ({
    addToast: mockedAddToast,
  }),
}));

jest.mock('../../hooks/auth', () => ({
  useAuth: () => ({
    logIn: mockedLogIn,
  }),
}));

describe('LogIn Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should be able to log in', async () => {
    const { getByPlaceholderText, getByText } = render(<LogIn />);

    const emailField = getByPlaceholderText('email');
    const passwordField = getByPlaceholderText('password');
    const submitButton = getByText('Submit');

    fireEvent.change(emailField, { target: { value: 'john@got.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });
    fireEvent.click(submitButton);

    await wait(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('should be NOT able to log in with invalid credentials', async () => {
    const { getByPlaceholderText, getByText } = render(<LogIn />);

    const emailField = getByPlaceholderText('email');
    const passwordField = getByPlaceholderText('password');
    const submitButton = getByText('Submit');

    fireEvent.change(emailField, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });
    fireEvent.click(submitButton);

    await wait(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'error' }),
      );
    });
  });

  it('should be NOT able to log in when authentication fails', async () => {
    mockedLogIn.mockImplementation(() => {
      throw new Error();
    });

    const { getByPlaceholderText, getByText } = render(<LogIn />);

    const emailField = getByPlaceholderText('email');
    const passwordField = getByPlaceholderText('password');
    const submitButton = getByText('Submit');

    fireEvent.change(emailField, { target: { value: 'john@got.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });
    fireEvent.click(submitButton);

    await wait(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'error' }),
      );
    });
  });
});
