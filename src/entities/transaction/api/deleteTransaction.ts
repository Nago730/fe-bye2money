import { TRANSACTIONS_ENDPOINT } from './config';

export const deleteTransaction = async (
  id: string
): Promise<void> => {
  const url = `${TRANSACTIONS_ENDPOINT}/${id}`;
  const res = await fetch(url, { method: 'DELETE' });
  if (!res.ok) throw new Error('삭제 실패');
};