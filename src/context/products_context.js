import React, { useContext, useEffect, useState, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import db from '../utils/firebase.config';
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../actions';

const initialState = {
  products: [],
  products_loading: false,
  products_error: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [products, setProducts] = useState([])

  const fetchData = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await db.collection('data');
      const data = await response.get();
      const products = data.docs.map((item) => ({ id: item.id, ...item.data() }))
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
