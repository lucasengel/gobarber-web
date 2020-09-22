import { StyledInput } from './styles';
import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <StyledInput>
    {Icon && <Icon size="20" />}
    <input {...rest} />
  </StyledInput>
);

export default Input;
