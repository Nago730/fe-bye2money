import { createContext, useContext, ReactNode } from 'react';
import { useInputBarStore } from './useInputBarStore';

const InputBarContext = createContext<
  ReturnType<typeof useInputBarStore> | undefined
>(undefined);

export const InputBarProvider = ({ children }: { children: ReactNode }) => {
  const store = useInputBarStore();
  return (
    <InputBarContext.Provider value={store}>
      {children}
    </InputBarContext.Provider>
  );
};

export function useInputBarContext() {
  const context = useContext(InputBarContext);
  if (!context)
    throw new Error('useInputBarContext must be used within InputBarProvider');
  return context;
}
