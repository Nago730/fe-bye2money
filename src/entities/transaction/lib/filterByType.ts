import { Transaction } from '../model/transactionModel';

export const filterByType = (
  transactions: Transaction[],
  filterType: 'income' | 'expense' | null
): Transaction[] => {
  if (!filterType) return transactions;
  return transactions.filter((tx) => tx.type === filterType);
}; 