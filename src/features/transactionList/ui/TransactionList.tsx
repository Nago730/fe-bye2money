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
  width: 846px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100;
  border-top: 0.5px solid ${({ theme }) => theme.tokens.nuetral.border.default};
  border-bottom: 0.5px solid ${({ theme }) => theme.tokens.nuetral.border.default};
`;

// 스크롤을 적용할 영역
const ScrollableSections = styled.div`
  overflow-y: auto; // 세로 스크롤 자동 생성
  max-height: calc(100vh - 350px); // 최대 높이 지정 (뷰포트 높이의 60%)
  display: flex;
  flex-direction: column;
  gap: 40px; // Container의 gap과 일치시킬 수 있음

  // 스크롤바 스타일링 (선택 사항)
  &::-webkit-scrollbar {
    display: none;
  }
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
      {/* 스크롤 컨테이너 추가 */}
      <ScrollableSections>
        {dailyList.map(
          ({ dailyInfo: { date, incomeTotal: inc, expenseTotal: exp }, transactions }: any) => (
            <Section key={date}>
              <DailyInfo date={date} incomeTotal={inc} expenseTotal={exp} />
              <ItemsWrapper>
                {transactions.map((tx: Transaction) => (
                  <TransactionListItem key={tx.id} transaction={tx} />
                ))}
              </ItemsWrapper>
            </Section>
          )
        )}
      </ScrollableSections>
    </Container>
  );
};
