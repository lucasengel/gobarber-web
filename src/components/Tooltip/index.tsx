import React from 'react';
import { StyledTooltip } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, className, title }) => (
  <StyledTooltip className={className}>
    {children}
    <span>{title}</span>
  </StyledTooltip>
);

export default Tooltip;
