export type TabType = 'transactions' | 'calendar' | 'stats';

export type TabItem = {
  id: TabType;
  label: string;
  path: string;
};

export const tabItems: TabItem[] = [
  { id: 'transactions', label: '내역', path: '/' },
  { id: 'calendar', label: '달력', path: '/calendar' },
  { id: 'stats', label: '통계', path: '/stats' },
]; 