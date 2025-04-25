import React from 'react';
import styled from '@emotion/styled';
import { Transaction } from '@/entities/transaction/model/transactionModel';
import { formatCurrency } from '@/shared/lib/format';
import { useTransactionContext } from '@/shared/contexts/TransactionsContext';

interface CategoryProps {
  category: string;
}

const Category = styled.span<CategoryProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, category }) => 
    theme.categoryColors[category as keyof typeof theme.categoryColors] ||
    theme.colors.pastel.perfume};
  width: 92px;
  height: 56px;
  
  ${({ theme }) => theme.typography.light12};
  color: ${({ theme }) => theme.tokens.nuetral.text.default};
`;

const Description = styled.span`
  width: 400px;
  ${({ theme }) => theme.typography.light14};
  color: ${({ theme }) => theme.tokens.nuetral.text.default};
`;

const Payment = styled.span`
  width: 104px;
  ${({ theme }) => theme.typography.light14};
  color: ${({ theme }) => theme.tokens.nuetral.text.default};
`;

const AmountText = styled.span<{ type: 'income' | 'expense' }>`
  width: 186px;
  display: flex;
  justify-content: flex-end;
  margin-right: 16px;
  
  ${({ theme }) => theme.typography.light14};
  color: ${({ theme, type }) =>
    type === 'income'
      ? theme.tokens.brand.text.income
      : theme.tokens.brand.text.expense};
  transition: transform 0.3s;
  transform: translateX(0);
  `;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  margin-right: 16px;
  border: none;
  background: none;
  ${({ theme }) => theme.typography.semibold12};
  color: ${({ theme }) => theme.tokens.danger.text.default};
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
      <Category category={transaction.category}>{transaction.category}</Category>
      <Description>{transaction.content}</Description>
      <Payment>{transaction.payment}</Payment>
      <AmountText type={transaction.type}>
        {formatCurrency(transaction.amount)}
      </AmountText>
      <DeleteButton onClick={() => deleteTransaction(transaction.id)}>
        삭제
      </DeleteButton>
    </ItemWrapper>
  );
}; 