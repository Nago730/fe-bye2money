import { Transaction } from '../model/transactionModel';
import { TRANSACTIONS_ENDPOINT } from './config';

export const updateTransaction = async (
  tx: Transaction
): Promise<Transaction> => {
  const url = `${TRANSACTIONS_ENDPOINT}/${tx.id}`;
  const res = await fetch(
    url,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tx),
    }
  );
  if (!res.ok) throw new Error('업데이트 실패');
  return res.json();
};