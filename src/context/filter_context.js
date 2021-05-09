import React, { useContext, useReducer } from 'react';
import {} from '../actions';

const initialState = {};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  return <FilterContext.Provider value={{}}>{children}</FilterContext.Provider>;
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
