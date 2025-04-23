export const deleteTransaction = async (
  id: string
): Promise<void> => {
  const res = await fetch(
    `http://localhost:3001/transactions/${id}`,
    { method: 'DELETE' }
  );
  if (!res.ok) throw new Error('삭제 실패');
}; 