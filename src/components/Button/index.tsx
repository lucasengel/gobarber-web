import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = props => (
  <StyledButton {...props}>{props.children}</StyledButton>
);

export default Button;
