import { StyledInput } from './styles';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const inputRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <StyledInput>
      {Icon && <Icon size="20" />}
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </StyledInput>
  );
};

export default Input;
