import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Transaction } from '@/entities/transaction/model/transactionModel';
import { formatCurrency } from '@/shared/lib/format';
import { useTransactionContext } from '@/shared/contexts/TransactionsContext';

const Category = styled.span`
  width: 92px;
  height: 56px;
  padding: 4px 8px;
  box-sizing: border-box;
`;

const Description = styled.span`
  width: 400px;
  ${({ theme }) => {
    const { fontFamily, fontSize, lineHeight, fontWeight } = theme.typography.light14;
    return css`
      font-family: ${fontFamily};
      font-weight: ${fontWeight};
      font-size: ${fontSize};
      line-height: ${lineHeight};
      color: ${theme.tokens.nuetral.text.default};
    `;
  }}
`;

const Payment = styled.span`
  width: 104px;
  ${({ theme }) => {
    const { fontFamily, fontSize, lineHeight, fontWeight } = theme.typography.light14;
    return css`
      font-family: ${fontFamily};
      font-weight: ${fontWeight};
      font-size: ${fontSize};
      line-height: ${lineHeight};
      color: ${theme.tokens.nuetral.text.default};
    `;
  }}
`;

const AmountText = styled.span<{ type: 'income' | 'expense' }>`
  ${({ theme }) => theme.typography.light14};
  color: ${({ theme, type }) =>
    type === 'income'
      ? theme.tokens.brand.text.income
      : theme.tokens.brand.text.expense};
  transition: transform 0.3s;
  transform: translateX(0);
`;

const DeleteButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
`;

const ItemWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  position: relative;
  &:hover {
    background-color: ${({ theme }) => theme.tokens.nuetral.surface.point};
  }
  &:hover ${AmountText} {
    transform: translateX(-57px);
  }
  &:hover ${DeleteButton} {
    opacity: 1;
  }
`;

interface Props {
  transaction: Transaction;
}

export const TransactionListItem: React.FC<Props> = ({ transaction }) => {
  const { deleteTransaction } = useTransactionContext();

  return (
    <ItemWrapper>
      <Category>{transaction.category}</Category>
      <Description>{transaction.content}</Description>
      <Payment>{transaction.payment}</Payment>
      <AmountText type={transaction.type}>
        {formatCurrency(transaction.amount)}
      </AmountText>
      <DeleteButton onClick={() => deleteTransaction(transaction.id)}>
        🗑️
      </DeleteButton>
    </ItemWrapper>
  );
}; 