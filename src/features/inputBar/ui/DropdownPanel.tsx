import React from 'react';
import styled from '@emotion/styled';
import { GhostButton } from '@/shared/ui/Button';
import CloseIcon from '@/assets/close.svg?react';

export interface PaymentMethodDropdownProps {
  Methods: string[];
  onSelect: (method: string) => void;
  onAdd?: () => void;
  showAddItem?: boolean;
}

export const DropdownPanel: React.FC<PaymentMethodDropdownProps> = ({
  Methods,
  onSelect,
  onAdd,
  showAddItem = true,
}) => (
  <Container>
    {Methods.map((method, idx) => (
      <React.Fragment key={method}>
        <Item>
          <MethodText onClick={() => onSelect(method)}>{method}</MethodText>
          <ActionButton size="regular">
            <CloseIcon />
          </ActionButton>
        </Item>
        {idx < Methods.length - 1 && <Divider />}
      </React.Fragment>
    ))}
    {showAddItem && (
      <>
        <Divider />
        <AddItem onClick={onAdd}>추가하기</AddItem>
      </>
    )}
  </Container>
);

const Container = styled.div`
  width: 152px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.grayscale[50]};
  border: 0.5px solid ${({ theme }) => theme.tokens.nuetral.border.default};
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  gap: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.tokens.nuetral.surface.point};
  }
`;

const MethodText = styled.span`
  width: 70px;
  cursor: pointer;
  ${({ theme }) => theme.typography.light12};
  color: ${({ theme }) => theme.tokens.nuetral.text.default};
`;

const ActionButton = styled(GhostButton)`
  svg path {
    stroke: ${({ theme }) => theme.tokens.danger.text.default};
  }
`;

const Divider = styled.div`
  width: 100px;
  border-top: 0.5px solid ${({ theme }) => theme.tokens.nuetral.text.default};
`;

const AddItem = styled.button`
  width: 150px;
  padding: 16px 24px;
  text-align: left;
  ${({ theme }) => theme.typography.light12};
  color: ${({ theme }) => theme.tokens.nuetral.text.default};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.tokens.nuetral.surface.point};
  }
`;

interface DropdownWrapperProps {
  isOpen: boolean;
}

export const DropdownWrapper = styled.div<DropdownWrapperProps>`
  position: absolute;
  top: calc(100% + 15px);
  left: -25px;
  z-index: 10;
  overflow: hidden;
  transition:
    max-height 0.5s ease-out,
    opacity 0.5s ease-out;

  max-height: ${({ isOpen }) => (isOpen ? '570px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  box-shadow: 0px 4px 4px 0px #524d901a;
  box-shadow: 0px 2px 2px 0px #524d9014;
`;
