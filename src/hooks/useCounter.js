import { useReducer } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state.count < action.max
        ? { ...state, count: state.count + 1 }
        : state;
    case 'DECREMENT':
      return state.count > action.min
        ? { ...state, count: state.count - 1 }
        : state;
    default:
      return state;
  }
}

export default function useCounter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 1 });
  return [state, dispatch];
}
