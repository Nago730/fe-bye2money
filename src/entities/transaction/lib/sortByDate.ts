import { Transaction } from '../model/transactionModel';

export const sortByDate = (
  transactions: Transaction[]
): Transaction[] =>
  [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  ); 