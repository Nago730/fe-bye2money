import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { formatCurrency } from '@/shared/lib/format';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 846px;
`;

const SummaryText = styled.span`
  ${({ theme }) => {
    const { fontFamily, fontSize, lineHeight, fontWeight } = theme.typography.light12;
    return css`
      font-family: ${fontFamily};
      font-weight: ${fontWeight};
      font-size: ${fontSize};
      line-height: ${lineHeight};
      color: ${theme.tokens.nuetral.text.default};
    `;
  }}
  margin-right: 8px;
`;

const Filters = styled.div`
  display: flex;
  gap: 12px;

  label {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
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
    <SummaryText>전체 내역 {totalCount}건</SummaryText>
    <Filters>
      <label>
        <input
          type="checkbox"
          checked={showIncome}
          onChange={onToggleIncome}
        />
        수입 {formatCurrency(incomeTotal, false)}
      </label>
      <label>
        <input
          type="checkbox"
          checked={showExpense}
          onChange={onToggleExpense}
        />
        지출 {formatCurrency(expenseTotal, false)}
      </label>
    </Filters>
  </HeaderWrapper>
); 