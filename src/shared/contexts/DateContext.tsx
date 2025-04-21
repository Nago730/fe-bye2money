import React, { createContext, useContext, useState, ReactNode } from 'react';

const DateContext = createContext<Date | undefined>(undefined);

export const DateProvider = ({ children }: { children: ReactNode }) => {
  const [date, setDate] = useState(new Date());

  return (
    <DateContext.Provider value={date}>
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => {
  const context = useContext(DateContext);
  if (context === undefined) {
    throw new Error('useDate must be used within a DateProvider');
  }
  return context;
}; 