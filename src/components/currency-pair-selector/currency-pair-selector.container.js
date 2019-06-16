import React, { useEffect, useCallback } from 'react';
import { useAppState, useDispatch } from '../app-state/app-state';
import { CURRENCY_PAIRS_LOADED, CURRENCY_PAIR_SELECTED } from '../../actions';
import { CurrencyPairSelector } from './currency-pair-selector';

const findById = idToFind => ({ id }) => idToFind === id

export const CurrencyPairSelectorContainer = () => {
  const { currencyPairs } = useAppState();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://www.bitstamp.net/api/v2/trading-pairs-info/')
      .then((resp => resp.json()))
      .then(data => dispatch({ type: CURRENCY_PAIRS_LOADED, data }));
  });
  const onSelect = useCallback((id) => {
    dispatch({
      type: CURRENCY_PAIR_SELECTED,
      selectedCurrencyPair: currencyPairs.find(findById(id)),
    })
  }, [currencyPairs, dispatch]);
  return <CurrencyPairSelector onSelect={onSelect} currencyPairs={currencyPairs || []} />
}