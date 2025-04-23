import { useMemo } from 'react';
import { Transaction } from '../model/transactionModel';
import { sortByDate } from '../lib/sortByDate';

export const useSortedTransactions = (
  transactions: Transaction[]
): Transaction[] =>
  useMemo(() => sortByDate(transactions), [transactions]); 