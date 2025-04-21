import { ReactNode } from 'react';
import { DateProvider } from '@/shared/contexts/DateContext';
import { ModalProvider } from '@/shared/contexts/ModalContext';

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  return (
    <DateProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </DateProvider>
  );
}; 