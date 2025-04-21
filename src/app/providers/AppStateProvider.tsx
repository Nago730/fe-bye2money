import { ReactNode } from 'react';
import { ModalProvider } from '@/shared/contexts/ModalContext';

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  return (
      <ModalProvider>
        {children}
      </ModalProvider>
  );
}; 