import { createContext, useContext, ReactNode } from 'react';
import { useDateParams } from '@/shared/hooks/useDateParams';
import { useTransactionOperations } from '@/features/transactionOperations';
import { TransactionOperations } from '@/features/transactionOperations/hooks/useTransactionOperations';


const TransactionContext = createContext<TransactionOperations | undefined>(undefined);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const { year, month } = useDateParams();
  const {
    data,
    loading,
    error,
    loadTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction
  } = useTransactionOperations(year, month);

  return (
    <TransactionContext.Provider
      value={{ data, loading, error, loadTransactions, addTransaction, updateTransaction, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactionContext = (): TransactionOperations => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransactionContext must be used within a TransactionProvider');
  }
  return context;
};
