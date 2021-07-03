import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { debugContextDevtool } from 'react-context-devtool';
import { ProductsProvider } from './context/products_context';

const container = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>,
  container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

debugContextDevtool(container);
