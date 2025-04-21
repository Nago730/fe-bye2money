import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { ROUTE_PATH } from './routePaths';

import TransactionsPage from '@/pages/TransactionsPage';
import CalendarPage from '@/pages/CalendarPage';
import StatsPage from '@/pages/StatsPage';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: <App />,
    children: [
      { index: true, element: <TransactionsPage /> },
      { path: ROUTE_PATH.CALENDAR, element: <CalendarPage /> },
      { path: ROUTE_PATH.STATS, element: <StatsPage /> },
    ],
  },
]); 