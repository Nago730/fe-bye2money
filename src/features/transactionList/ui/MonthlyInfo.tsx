import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { formatCurrency } from '@/shared/lib/format';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    gap: 8px;
  }
`;

const SummaryText = styled.span`
  ${({ theme }) => theme.typography.light12};
  ${({ theme }) => theme.tokens.nuetral.text.default};
`;

const Filters = styled.div`
  display: flex;
  gap: 12px;

  label {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;

    ${({ theme }) => theme.typography.light12};
    ${({ theme }) => theme.tokens.nuetral.text.default};
  }
`;

interface MonthlyInfoProps {
  totalCount: number;
  incomeTotal: number;
  expenseTotal: number;
  showIncome: boolean;
  showExpense: boolean;
  onToggleIncome: () => void;
  onToggleExpense: () => void;
}

export const MonthlyInfo: React.FC<MonthlyInfoProps> = ({
  totalCount,
  incomeTotal,
  expenseTotal,
  showIncome,
  showExpense,
  onToggleIncome,
  onToggleExpense,
}) => (
  <HeaderWrapper>
    <div>
      <SummaryText>전체 내역</SummaryText>
      <SummaryText>{totalCount}건</SummaryText>
    </div>
    <Filters>
      <label>
        <input
          type="checkbox"
          checked={showIncome}
          onChange={onToggleIncome}
        />
        <span>수입 {formatCurrency(incomeTotal, false)}</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={showExpense}
          onChange={onToggleExpense}
        />
        <span>지출 {formatCurrency(expenseTotal, false)}</span>
      </label>
    </Filters>
  </HeaderWrapper>
); 