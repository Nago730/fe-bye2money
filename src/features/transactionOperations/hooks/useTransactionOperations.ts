import { useCallback } from 'react';
import {
  readTransactions,
  createTransaction,
  updateTransaction as apiUpdateTransaction,
  deleteTransaction as apiDeleteTransaction
} from '@/entities/transaction/api';
import { useTransactionStore } from '@/entities/transaction/hooks/useTransactionStore';
import { Transaction } from '@/entities/transaction/model/transactionModel';

export const useTransactionOperations = (year: number, month: number) => {
  const { data, loading, error, dispatch } = useTransactionStore(year, month);

  const loadTransactions = useCallback(() => {
    dispatch({ type: 'FETCH_START' });
    readTransactions(year, month)
      .then(result => dispatch({ type: 'FETCH_SUCCESS', payload: result }))
      .catch(err => dispatch({ type: 'FETCH_ERROR', payload: err.message || '데이터 불러오기 실패' }));
  }, [year, month, dispatch]);

  const addTransaction = useCallback(async (newTx: Omit<Transaction, 'id'>) => {
    dispatch({ type: 'FETCH_START' });
    try {
      const saved = await createTransaction(newTx);
      dispatch({ type: 'ADD_TRANSACTION', payload: saved });
    } catch (err: any) {
      dispatch({ type: 'FETCH_ERROR', payload: err.message || '추가 실패' });
    }
  }, [dispatch]);

  const updateTransaction = useCallback(async (tx: Transaction) => {
    dispatch({ type: 'FETCH_START' });
    try {
      const updated = await apiUpdateTransaction(tx);
      dispatch({ type: 'UPDATE_TRANSACTION', payload: updated });
    } catch (err: any) {
      dispatch({ type: 'FETCH_ERROR', payload: err.message || '업데이트 실패' });
    }
  }, [dispatch]);

  const deleteTransaction = useCallback(async (id: string) => {
    dispatch({ type: 'FETCH_START' });
    try {
      await apiDeleteTransaction(id);
      dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    } catch (err: any) {
      dispatch({ type: 'FETCH_ERROR', payload: err.message || '삭제 실패' });
    }
  }, [dispatch]);

  return { data, loading, error, loadTransactions, addTransaction, updateTransaction, deleteTransaction };
};