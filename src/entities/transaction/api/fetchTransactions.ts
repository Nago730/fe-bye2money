import { Transaction } from '../model/transactionModel';

export const fetchTransactions = async (
  year: number,
  month: number
): Promise<Transaction[]> => {
  const res = await fetch(
    `http://localhost:3001/transactions?year=${year}&month=${month}`
  );
  if (!res.ok) throw new Error('데이터 불러오기 실패');
  return res.json();
}; 