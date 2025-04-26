import styled from '@emotion/styled';
import { InputBar } from '@/widgets/InputBarWidget';
import { TransactionListWidget } from '@/widgets/TransactionListWidget';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TransactionsPage = () => {
  return (
    <Container>
      <InputBar />
      <TransactionListWidget />
    </Container>
  );
};

export default TransactionsPage;
