import React, { useState, useEffect } from 'react';
import { useAppState } from '../app-state/app-state';
import { OrderBook } from './order-book';
import { withWebSocket } from '../../with-web-socket';

const message = (type, pair) => JSON.stringify({
    event: `bts:${type}`,
    data: {
        channel: `order_book_${pair}`
    }
});

export const OrderBookContainerRaw = ({ socket }) => {
  const { selectedCurrencyPair } = useAppState();
  const [componentState, setComponentState] = useState({ bids: null, asks: null });
  useEffect(() => {
    if (!socket || !selectedCurrencyPair) {
      return undefined;
    }
    socket.send(message('subscribe', selectedCurrencyPair.id))
    socket.onmessage = ({ data }) => {
      const { bids, asks } = JSON.parse(data).data;
      setComponentState({ bids, asks })
    }
    return () => {
      socket.send(message('unsubscribe', selectedCurrencyPair.id));
    }
  }, [selectedCurrencyPair, socket]);
  return <OrderBook bids={componentState.bids} asks={componentState.asks} />
}

export const OrderBookContainer = withWebSocket('wss://ws.bitstamp.net', OrderBookContainerRaw);