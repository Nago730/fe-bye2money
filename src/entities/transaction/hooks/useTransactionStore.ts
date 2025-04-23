import { useEffect, useReducer } from 'react';
import { Transaction } from '../model/transactionModel';
import { fetchTransactions } from '../api/fetchTransactions';

interface TransactionState {
  data: Transaction[];
  loading: boolean;
  error: string | null;
}

type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: Transaction[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'ADD_TRANSACTION'; payload: Transaction }
  | { type: 'UPDATE_TRANSACTION'; payload: Transaction }
  | { type: 'DELETE_TRANSACTION'; payload: string };

const reducer = (
  state: TransactionState,
  action: Action
): TransactionState => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { data: action.payload, loading: false, error: null };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_TRANSACTION':
      return { ...state, data: [...state.data, action.payload] };
    case 'UPDATE_TRANSACTION':
      return {
        ...state,
        data: state.data.map(tx =>
          tx.id === action.payload.id ? action.payload : tx
        ),
      };
    case 'DELETE_TRANSACTION':
      return { ...state, data: state.data.filter(tx => tx.id !== action.payload) };
    default:
      return state;
  }
};

export const useTransactionStore = (
  year: number,
  month: number
) => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const load = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const result = await fetchTransactions(year, month);
        dispatch({ type: 'FETCH_SUCCESS', payload: result });
      } catch (err: any) {
        dispatch({ type: 'FETCH_ERROR', payload: err.message || '데이터 불러오기 실패' });
      }
    };
    load();
  }, [year, month]);

  return { ...state, dispatch };
}; 