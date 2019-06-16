import React from 'react';
import { Wrapper } from './order-book-column.styled';

export const OrderBookColumn = ({ data, title }) => (
  <Wrapper>
    <div>{title}</div>
    {data.map(values => (
      <div className="row">
        <div>{values[0]}</div>
        <div>{values[1]}</div>
      </div>
    ))}     
  </Wrapper>
);