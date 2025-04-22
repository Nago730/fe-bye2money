import { useLocation } from 'react-router-dom';
import { getTabFromPath } from '../lib/getTabFromPath';

export const useActiveTab = () => {
  const { pathname } = useLocation();
  return getTabFromPath(pathname);
}; 