import { Transaction } from '../model/transactionModel';

export interface TransactionState {
  data: Transaction[];
  loading: boolean;
  error: string | null;
}

export type TransactionAction =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: Transaction[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'ADD_TRANSACTION'; payload: Transaction }
  | { type: 'UPDATE_TRANSACTION'; payload: Transaction }
  | { type: 'DELETE_TRANSACTION'; payload: string };

export const initialTransactionState: TransactionState = {
  data: [],
  loading: true,
  error: null,
};

export const transactionReducer = (
  state: TransactionState,
  action: TransactionAction
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