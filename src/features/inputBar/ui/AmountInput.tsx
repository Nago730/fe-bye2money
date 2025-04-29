import styled from '@emotion/styled';
import { GhostButton } from '@/shared/ui/Button';
import MinusIcon from '@/assets/minus.svg?react';
import PlusIcon from '@/assets/plus.svg?react';
import { formatCurrency } from '@/shared/lib/format';

export interface AmountInputProps {
  value: number;
  onChange: (val: number) => void;
  type: 'income' | 'expense';
  onToggleType: () => void;
}

export const AmountInput = ({
  value,
  onChange,
  type,
  onToggleType,
}: AmountInputProps) => (
  <Container>
    <Label>금액</Label>
    <InputRow>
      <ToggleButton onClick={onToggleType} size="small">
        {type === 'expense' ? <MinusIcon /> : <PlusIcon />}
      </ToggleButton>
      <InputField
        type="text"
        placeholder="금액을 입력하세요"
        value={formatCurrency(value, false)}
        onChange={(e) => onChange(Number(e.target.value.replace(/,/g, '')))}
      />
      <Unit>원</Unit>
    </InputRow>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 134px;
`;

const Label = styled.span`
  ${({ theme }) => theme.typography.light12};
  color: ${({ theme }) => theme.tokens.nuetral.text.default};
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const ToggleButton = styled(GhostButton)``;

const InputField = styled.input`
  width: 88px;
  text-align: right;

  ${({ theme }) => theme.typography.semibold12};
  color: ${({ theme }) => theme.tokens.nuetral.text.default};

  &::placeholder {
    ${({ theme }) => theme.typography.light12};
    color: ${({ theme }) => theme.tokens.nuetral.text.weak};
    opacity: 1;
  }
`;

const Unit = styled.span`
  ${({ theme }) => theme.typography.light14};
  color: ${({ theme }) => theme.tokens.nuetral.text.default};
  width: 16px;
  height: 16px;
  text-align: right;
  line-height: 16px;
`;
