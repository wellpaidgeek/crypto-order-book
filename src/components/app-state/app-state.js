import React, { createContext, useReducer, useContext } from 'react';
import * as actions from '../../actions';

const AppStateContext = createContext({});
const AppStateDispatchContext = createContext(() => {});

export const useAppState = () => useContext(AppStateContext);
export const useDispatch = () => useContext(AppStateDispatchContext);

const initialState = {
  currencyPairs: null,
  selectedCurrencyPair: null,
}

const reducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case actions.CURRENCY_PAIRS_LOADED:
      return {
        ...state,
        currencyPairs: action.data.map(
          ({ name, url_symbol }) => ({ name, id: url_symbol })
        )
      }
    case actions.CURRENCY_PAIR_SELECTED:
      return {
        ...state,
        selectedCurrencyPair: action.selectedCurrencyPair,
      }
    default:
      throw new Error(`Invalid app state action '${action.type}'`);
  }
}

export const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('STATE', state)
  return (
    <AppStateDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>{children}</AppStateContext.Provider>
    </AppStateDispatchContext.Provider>
  );
}