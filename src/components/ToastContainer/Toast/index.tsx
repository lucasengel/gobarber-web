import React from 'react';
import {
  FiAlertCircle,
  FiInfo,
  FiCheckCircle,
  FiXCircle,
} from 'react-icons/fi';
import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface ToastProps {
  toast: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ toast, style }) => {
  const { removeToast } = useToast();

  let timer = setTimeout(() => removeToast(toast.id), 3000);

  const handleMouseOver = () => {
    clearTimeout(timer);
  };
  const handleMouseLeave = () => {
    timer = setTimeout(() => removeToast(toast.id), 3000);
  };

  return (
    <Container
      type={toast.type}
      style={style}
      hasDescription={!!toast.description}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {icons[toast.type || 'info']}
      <div>
        <strong>{toast.title}</strong>
        {toast.description && <p>{toast.description}</p>}
      </div>
      <button type="button" onClick={() => removeToast(toast.id)}>
        <FiXCircle size="18" />
      </button>
    </Container>
  );
};

export default Toast;
