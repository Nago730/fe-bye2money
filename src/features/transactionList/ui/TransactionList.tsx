import React from 'react';
import styled from '@emotion/styled';
import { MonthlyInfo } from './MonthlyInfo';
import { DailyInfo } from './DailyInfo';
import { TransactionListItem } from './TransactionListItem';
import { useTransactionList } from '../hooks/useTransactionList';
import { Transaction } from '@/entities/transaction/model/transactionModel';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TransactionList: React.FC = () => {
  const {
    monthlyInfo: { totalCount, incomeTotal, expenseTotal },
    dailyList,
    showIncome,
    showExpense,
    toggleIncome,
    toggleExpense,
  }: any = useTransactionList();

  return (
    <Container>
      <MonthlyInfo
        totalCount={totalCount}
        incomeTotal={incomeTotal}
        expenseTotal={expenseTotal}
        showIncome={showIncome}
        showExpense={showExpense}
        onToggleIncome={toggleIncome}
        onToggleExpense={toggleExpense}
      />
      {dailyList.map(({ dailyInfo: { date, incomeTotal: inc, expenseTotal: exp }, transactions }: any) => (
        <Section key={date}>
          <DailyInfo
            date={date}
            incomeTotal={inc}
            expenseTotal={exp}
          />
          <ItemsWrapper>
            {transactions.map((tx: Transaction) => (
              <TransactionListItem key={tx.id} transaction={tx} />
            ))}
          </ItemsWrapper>
        </Section>
      ))}
    </Container>
  );
}; 