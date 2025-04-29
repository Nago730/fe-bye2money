import styled from '@emotion/styled';
import { InputBarWidget } from '@/widgets/InputBarWidget';
import { TransactionListWidget } from '@/widgets/TransactionListWidget';
import { InputBarProvider } from '@/features/inputBar/store/InputBarContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;

const TransactionsPage = () => {
  return (
    <InputBarProvider>
      <Container>
        <InputBarWidget />
        <TransactionListWidget />
      </Container>
    </InputBarProvider>
  );
};

export default TransactionsPage;
