import { useMemo } from 'react';
import { Transaction } from '../model/transactionModel';
import { filterByType } from '../lib/filterByType';

export const useFilteredTransactions = (
  transactions: Transaction[],
  filterType: 'income' | 'expense' | null
): Transaction[] =>
  useMemo(
    () => filterByType(transactions, filterType),
    [transactions, filterType]
  ); 