import styled from '@emotion/styled';
import { GhostButton } from '@/shared/ui/Button';
import CheckIcon from '@/assets/check.svg?react';

export interface ConfirmButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export const ConfirmButton = ({
  onClick,
  disabled = true,
}: ConfirmButtonProps) => (
  <StyledAddBtn onClick={onClick} disabled={disabled} size={'large'}>
    <CheckIcon />
  </StyledAddBtn>
);

const StyledAddBtn = styled(GhostButton)`
  background-color: ${({ theme }) => theme.tokens.nuetral.text.default};
  border-radius: 50%;

  svg {
    ${({ theme }) => theme.iconDimensions.regular};
  }

  svg path {
    stroke: ${({ theme }) => theme.tokens.danger.text.revDefault};
  }
`;
