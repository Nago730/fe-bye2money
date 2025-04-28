import styled from '@emotion/styled';
import { InputBarWidget } from '@/widgets/InputBarWidget';
import { TransactionListWidget } from '@/widgets/TransactionListWidget';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;

const TransactionsPage = () => {
  return (
    <Container>
      <InputBarWidget />
      <TransactionListWidget />
    </Container>
  );
};

export default TransactionsPage;
