import { ReactNode } from 'react';
import { ModalProvider } from '@/shared/contexts/ModalContext';
import { TransactionProvider } from '@/shared/contexts/TransactionsContext';

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TransactionProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </TransactionProvider>
  );
}; 