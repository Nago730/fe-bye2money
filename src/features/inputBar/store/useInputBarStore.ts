import { useReducer, useMemo, useCallback } from 'react';
import { inputBarReducer, initialInputBarState } from './inputBarReducer';

export function useInputBarStore() {
  const [state, dispatch] = useReducer(inputBarReducer, initialInputBarState);

  const isValid = useMemo(
    () =>
      !!state.date &&
      state.amount > 0 &&
      !!state.description &&
      !!state.paymentMethod &&
      !!state.category,
    [
      state.date,
      state.amount,
      state.description,
      state.paymentMethod,
      state.category,
    ]
  );

  const setDate = useCallback(
    (d: string) => dispatch({ type: 'SET_DATE', payload: d }),
    []
  );
  const setAmount = useCallback(
    (n: number) => dispatch({ type: 'SET_AMOUNT', payload: n }),
    []
  );
  const toggleType = useCallback(() => dispatch({ type: 'TOGGLE_TYPE' }), []);
  const setDescription = useCallback(
    (s: string) => dispatch({ type: 'SET_DESCRIPTION', payload: s }),
    []
  );
  const togglePayment = useCallback(
    () => dispatch({ type: 'TOGGLE_PAYMENT' }),
    []
  );
  const selectPayment = useCallback(
    (m: string) => dispatch({ type: 'SELECT_PAYMENT', payload: m }),
    []
  );
  const toggleCategory = useCallback(
    () => dispatch({ type: 'TOGGLE_CATEGORY' }),
    []
  );
  const selectCategory = useCallback(
    (c: string) => dispatch({ type: 'SELECT_CATEGORY', payload: c }),
    []
  );
  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

  return {
    ...state,
    isValid,
    setDate,
    setAmount,
    toggleType,
    setDescription,
    togglePayment,
    selectPayment,
    toggleCategory,
    selectCategory,
    reset,
  };
}
