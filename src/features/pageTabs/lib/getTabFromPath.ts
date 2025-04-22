import { TabType } from '../model/tabModel';

export const getTabFromPath = (path: string): TabType => {
  if (path.startsWith('/calendar')) return 'calendar';
  if (path.startsWith('/stats')) return 'stats';
  return 'transactions';
}; 