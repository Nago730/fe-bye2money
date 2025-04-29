import styled from '@emotion/styled';
import { useInputBarContext } from '../store/InputBarContext';
import { useInputBarOperations } from '../';

import { DateInput } from './DateInput';
import { AmountInput } from './AmountInput';
import { DescriptionInput } from './DescriptionInput';
import { PaymentMethodSelect } from './PaymentMethodSelect';
import { CategorySelect } from './CategorySelect';
import { ConfirmButton } from './ConfirmButton';
import { InputDivider } from './InputDivider';

export const InputBar = () => {
  const {
    date,
    amount,
    type,
    description,
    paymentMethod,
    category,
    isValid,
    setDate,
    setAmount,
    toggleType,
    setDescription,
  } = useInputBarContext();

  const { submit } = useInputBarOperations();

  return (
    <Container>
      <DateInput value={date} onChange={setDate} />
      <InputDivider />
      <AmountInput
        value={amount}
        onChange={setAmount}
        type={type}
        onToggleType={toggleType}
      />
      <InputDivider />
      <DescriptionInput value={description} setContent={setDescription} />
      <InputDivider />
      <PaymentMethodSelect value={paymentMethod} />
      <InputDivider />
      <CategorySelect value={category} />
      <ConfirmButton onClick={submit} disabled={!isValid} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 894px;
  height: 76px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.tokens.nuetral.surface.default};
  border: 0.5px solid ${({ theme }) => theme.tokens.nuetral.border.default};
`;
