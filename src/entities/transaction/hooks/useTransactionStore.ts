import { useEffect, useReducer } from 'react';
import { initialTransactionState, transactionReducer } from '../store/transactionReducer';
import { readTransactions } from '../api';

export const useTransactionStore = (
  year: number,
  month: number
) => {
  const [state, dispatch] = useReducer(
    transactionReducer,
    initialTransactionState
  );

  useEffect(() => {
    const load = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const result = await readTransactions(year, month);
        dispatch({ type: 'FETCH_SUCCESS', payload: result });
      } catch (err: any) {
        dispatch({ type: 'FETCH_ERROR', payload: err.message || '데이터 불러오기 실패' });
      }
    };
    load();
  }, [year, month]);

  return { ...state, dispatch };
};
