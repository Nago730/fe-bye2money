import { getTodayFormatted } from '@/shared/lib/format';

export type InputFieldState = {
  date: string;
  amount: number;
  type: 'income' | 'expense';
  description: string;
  paymentMethod: string | null;
  category: string | null;
  isPaymentOpen: boolean;
  isCategoryOpen: boolean;
};

export type InputBarAction =
  | { type: 'SET_DATE'; payload: string }
  | { type: 'SET_AMOUNT'; payload: number }
  | { type: 'TOGGLE_TYPE' }
  | { type: 'SET_DESCRIPTION'; payload: string }
  | { type: 'TOGGLE_PAYMENT' }
  | { type: 'SELECT_PAYMENT'; payload: string }
  | { type: 'TOGGLE_CATEGORY' }
  | { type: 'SELECT_CATEGORY'; payload: string }
  | { type: 'RESET' };

export const initialInputBarState: InputFieldState = {
  date: getTodayFormatted(),
  amount: 0,
  type: 'expense',
  description: '',
  paymentMethod: null,
  category: null,
  isPaymentOpen: false,
  isCategoryOpen: false,
};

export function inputBarReducer(
  state: InputFieldState,
  action: InputBarAction
): InputFieldState {
  switch (action.type) {
    case 'SET_DATE':
      return { ...state, date: action.payload };
    case 'SET_AMOUNT':
      return { ...state, amount: action.payload };
    case 'TOGGLE_TYPE':
      return {
        ...state,
        type: state.type === 'expense' ? 'income' : 'expense',
        category: null,
      };
    case 'SET_DESCRIPTION':
      return { ...state, description: action.payload };
    case 'TOGGLE_PAYMENT':
      return { ...state, isPaymentOpen: !state.isPaymentOpen };
    case 'SELECT_PAYMENT':
      return { ...state, paymentMethod: action.payload, isPaymentOpen: false };
    case 'TOGGLE_CATEGORY':
      return { ...state, isCategoryOpen: !state.isCategoryOpen };
    case 'SELECT_CATEGORY':
      return { ...state, category: action.payload, isCategoryOpen: false };
    case 'RESET':
      return initialInputBarState;
    default:
      return state;
  }
}
