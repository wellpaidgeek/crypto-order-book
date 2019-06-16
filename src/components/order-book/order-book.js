import React, { memo } from 'react';
import { OrderBookColumn } from '../order-book-column/order-book-column';
import { Wrapper } from './order-book.styled';

export const OrderBook = memo(({ bids, asks }) => {
  if (!bids || !asks) {
    return null;
  }
  return (
    <Wrapper>
      <OrderBookColumn title="Bids" data={bids} />
      <OrderBookColumn title="Asks" data={asks} />
    </Wrapper>
  )
});

