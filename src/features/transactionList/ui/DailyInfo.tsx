import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { formatDate, formatCurrency } from '@/shared/lib/format';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const DateLabel = styled.span`
  ${({ theme }) => theme.typography.serif16};
  color: ${({ theme }) => theme.tokens.nuetral.text.default};
`;

const Totals = styled.div`
  display: flex;
  gap: 16px;
  ${({ theme }) => theme.typography.serif16};
  color: ${({ theme }) => theme.tokens.nuetral.text.default};
`;

interface DailyInfoProps {
  date: string;
  incomeTotal: number;
  expenseTotal: number;
}

export const DailyInfo: React.FC<DailyInfoProps> = ({
  date,
  incomeTotal,
  expenseTotal,
}) => (
  <Wrapper>
    <DateLabel>{formatDate(date)}</DateLabel>
    <Totals>
      {incomeTotal > 0 && <span>수입 {formatCurrency(incomeTotal)}</span>}
      {expenseTotal > 0 && <span>지출 {formatCurrency(expenseTotal)}</span>}
    </Totals>
  </Wrapper>
); 