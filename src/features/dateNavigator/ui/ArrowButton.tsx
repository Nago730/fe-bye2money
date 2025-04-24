import styled from '@emotion/styled';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ArrowButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const ArrowButton = ({ children, ...props }: ArrowButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;