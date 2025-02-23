import React from 'react';
import { StoreProvider } from '../context';

const Provider: React.FC<{ children: any }> = ({ children }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default Provider;
