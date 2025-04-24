import { Transaction } from '../model/transactionModel';
import { TRANSACTIONS_ENDPOINT } from './config';

export const readTransactions = async (
  year: number,
  month: number
): Promise<Transaction[]> => {
  const url = `${TRANSACTIONS_ENDPOINT}?year=${year}&month=${month}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('데이터 불러오기 실패');
  return res.json();
}; 