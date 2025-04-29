import { useCallback } from 'react';
import { useInputBarContext } from '../store/InputBarContext';
import { useTransactionContext } from '@/shared/contexts/TransactionsContext';
import { Transaction } from '@/entities/transaction/model/transactionModel';
import { formatDotDateToISO } from '@/shared/lib/format';

export function useInputBarOperations() {
  const {
    date,
    amount,
    type,
    description,
    paymentMethod,
    category,
    isValid,
    reset,
  } = useInputBarContext();
  const { addTransaction } = useTransactionContext();

  const submit = useCallback(async () => {
    if (!isValid || !paymentMethod || !category) return;

    const isoDate = formatDotDateToISO(date);
    const dateObj = new Date(isoDate);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;

    const newTx: Omit<Transaction, 'id'> = {
      date: isoDate,
      year: year,
      month: month,
      amount: amount,
      type: type,
      content: description,
      payment: paymentMethod,
      category: category,
    };

    try {
      await addTransaction(newTx);
      reset();
    } catch (error) {
      console.error('Failed to add transaction:', error);
    }
  }, [
    date,
    amount,
    type,
    description,
    paymentMethod,
    category,
    isValid,
    addTransaction,
    reset,
  ]);

  return { submit };
}
