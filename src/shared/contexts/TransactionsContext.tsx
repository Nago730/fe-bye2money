import { createContext, useContext, ReactNode } from 'react';
import { useDateParams } from '@/shared/hooks/useDateParams';
import { useTransactionStore } from '@/entities/transaction/hooks/useTransactionStore';
import type { TransactionState, TransactionAction } from '@/entities/transaction/store/transactionReducer';

export interface TransactionContextValue extends TransactionState {
  dispatch: React.Dispatch<TransactionAction>;
}

const TransactionContext = createContext<TransactionContextValue | undefined>(undefined);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const { year, month } = useDateParams();

  const { data, loading, error, dispatch } = useTransactionStore(year, month);

  return (
    <TransactionContext.Provider value={{ data, loading, error, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactionContext = (): TransactionContextValue => {
  const context = useContext(TransactionContext);
  if (context === undefined) {
    throw new Error('useTransactionContext must be used within a TransactionProvider');
  }
  return context;
};
