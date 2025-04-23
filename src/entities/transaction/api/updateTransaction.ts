import { Transaction } from '../model/transactionModel';

export const updateTransaction = async (
  tx: Transaction
): Promise<Transaction> => {
  const res = await fetch(
    `http://localhost:3001/transactions/${tx.id}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tx),
    }
  );
  if (!res.ok) throw new Error('업데이트 실패');
  return res.json();
}; 