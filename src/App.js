import React from 'react';
import { AppState } from './components/app-state/app-state';
import { CurrencyPairSelectorContainer } from './components/currency-pair-selector/currency-pair-selector.container';
import { OrderBookContainer } from './components/order-book/order-book.container';
import { Wrapper } from './app.styled';

function App() {
  return (
    <AppState>
      <Wrapper>
          <h1>Crypto Order Book Viewer</h1>
          <CurrencyPairSelectorContainer />
          <OrderBookContainer />
      </Wrapper>
    </AppState>
  );
}

export default App;
