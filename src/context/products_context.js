import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/products_reducer';

import {} from '../actions';

const initialState = {
  products: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductsContext);
};
