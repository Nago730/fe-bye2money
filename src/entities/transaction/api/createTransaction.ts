import { Transaction } from '../model/transactionModel';

export const createTransaction = async (
  tx: Omit<Transaction, 'id'>
): Promise<Transaction> => {
  const res = await fetch(
    `http://localhost:3001/transactions`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tx),
    }
  );
  if (!res.ok) throw new Error('추가 실패');
  return res.json();
}; 