import { Transaction } from '../model/transactionModel';
import { TRANSACTIONS_ENDPOINT } from './config';

export const createTransaction = async (
  tx: Omit<Transaction, 'id'>
): Promise<Transaction> => {
  const res = await fetch(
    TRANSACTIONS_ENDPOINT,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tx),
    }
  );
  if (!res.ok) throw new Error('추가 실패');
  return res.json();
};