import styled from '@emotion/styled';
import { useInputBarContext } from '../store/InputBarContext';
import { GhostButton } from '@/shared/ui/Button';
import ChevronDownIcon from '@/assets/chevron-down.svg?react';
import { DropdownPanel, DropdownWrapper } from './DropdownPanel';

// 임시 데이터
const TEMP_PAYMENT_METHODS = ['현금', '신용카드', '비씨카드'];

export interface PaymentSelectProps {
  value: string | null;
  placeholder?: string;
}

export const PaymentMethodSelect = ({
  value,
  placeholder = '선택하세요',
}: PaymentSelectProps) => {
  const { isPaymentOpen, selectPayment, togglePayment } = useInputBarContext();

  return (
    <Container>
      <Label>결제수단</Label>
      <Field onClick={togglePayment}>
        <Selected isPlaceholder={!value}>{value ?? placeholder}</Selected>
        <ToggleButton size="small">
          <ChevronDownIcon />
        </ToggleButton>
      </Field>
      <DropdownWrapper isOpen={isPaymentOpen}>
        <DropdownPanel
          Methods={TEMP_PAYMENT_METHODS}
          onSelect={selectPayment}
          onAdd={() => {}} // 추후 모달과 연동
        />
      </DropdownWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 104px;
`;

const Label = styled.span`
  ${({ theme }) => theme.typography.light12};
  color: ${({ theme }) => theme.tokens.nuetral.text.default};
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

interface SelectedProps {
  isPlaceholder: boolean;
}

const Selected = styled.div<SelectedProps>`
  flex: 1;
  ${({ theme }) => theme.typography.semibold12};
  color: ${({ theme, isPlaceholder }) =>
    isPlaceholder
      ? theme.tokens.nuetral.text.weak
      : theme.tokens.nuetral.text.default};
`;

const ToggleButton = styled(GhostButton)``;
