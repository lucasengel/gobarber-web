import React, { ButtonHTMLAttributes } from 'react';
import { boolean } from 'yup';
import { StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <StyledButton {...rest}>{loading ? 'Sending' : children}</StyledButton>
);

export default Button;
