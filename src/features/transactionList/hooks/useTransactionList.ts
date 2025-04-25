import { useState, useMemo } from 'react';
import { useTransactionContext } from '@/shared/contexts/TransactionsContext';
import { Transaction } from '@/entities/transaction/model/transactionModel';

interface DailyData {
  dailyInfo: {
    date: string;
    incomeTotal: number;
    expenseTotal: number;
  };
  transactions: Transaction[];
}

export const useTransactionList = () => {
  const { data: transactions }: { data: Transaction[] } = useTransactionContext();
  const [showIncome, setShowIncome] = useState(true);
  const [showExpense, setShowExpense] = useState(true);

  const toggleIncome = () => setShowIncome(prev => !prev);
  const toggleExpense = () => setShowExpense(prev => !prev);

  const filteredTransactions = useMemo(() => {
    if (!Array.isArray(transactions)) {
      return [];
    }
    return transactions.filter((tx: Transaction) => {
      if (tx.type === 'income' && showIncome) return true;
      if (tx.type === 'expense' && showExpense) return true;
      return false;
    });
  }, [transactions, showIncome, showExpense]);

  const monthlyInfo = useMemo(() => {
    let incomeTotal = 0;
    let expenseTotal = 0;

    filteredTransactions.forEach((tx: Transaction) => {
      if (tx.type === 'income') {
        incomeTotal += tx.amount;
      } else {
        expenseTotal += tx.amount;
      }
    });

    return {
      totalCount: filteredTransactions.length,
      incomeTotal,
      expenseTotal,
    };
  }, [filteredTransactions]);

  const dailyList: DailyData[] = useMemo(() => {
    const grouped: { [date: string]: DailyData } = {};

    filteredTransactions.forEach((tx: Transaction) => {
      const date = tx.date;
      if (!grouped[date]) {
        grouped[date] = {
          dailyInfo: { date, incomeTotal: 0, expenseTotal: 0 },
          transactions: [],
        };
      }

      grouped[date].transactions.push(tx);
      if (tx.type === 'income') {
        grouped[date].dailyInfo.incomeTotal += tx.amount;
      } else {
        grouped[date].dailyInfo.expenseTotal += tx.amount;
      }
    });

    Object.values(grouped).forEach(group => {
        group.transactions.sort((a: Transaction, b: Transaction) => parseInt(b.id, 10) - parseInt(a.id, 10));
    });

    return Object.values(grouped).sort((a, b) =>
      b.dailyInfo.date.localeCompare(a.dailyInfo.date)
    );
  }, [filteredTransactions]);

  return {
    monthlyInfo,
    dailyList,
    showIncome,
    showExpense,
    toggleIncome,
    toggleExpense,
  };
}; 