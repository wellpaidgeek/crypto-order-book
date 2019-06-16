import React, { memo } from 'react'
import { StyledSelect } from './currency-pair-selector.styled';

const sortPairs = (a, b) => a.name > b.name ? 1 : -1; 

export const CurrencyPairSelector = memo(({ currencyPairs, onSelect }) => {
  const onChange = ({ target }) => {
    onSelect(target.options[target.selectedIndex].value);
  }
  return (
    <StyledSelect onChange={onChange}>
      <option value={null}>Select a trading pair</option>
      {currencyPairs.sort(sortPairs).map(
        ({ id, name }) => <option key={id} value={id}>{name}</option>
      )}
    </StyledSelect>
  );
});