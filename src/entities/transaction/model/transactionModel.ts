export interface Transaction {
  id: string;
  date: string; // YYYY-MM-DD
  year: number;
  month: number;
  type: 'income' | 'expense';
  category: string;
  content: string;
  amount: number;
  payment: string;
} 