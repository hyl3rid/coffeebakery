import React from 'react';
import MenuProduct from './MenuProduct';
import useFetchFirestore from '../useHooks/useFetchFirestore';
import styled from 'styled-components';

const MenuSection = ({ title, type }) => {
  const allProducts = useFetchFirestore();
  const products = allProducts.filter((p) => p.type === type);
  return (
    <section>
      {products.length > 0 && <h3 className='heading-3 subheading'>{title}</h3>}
      <div className='products-list'>
        {products.map((prod) => {
          return <MenuProduct key={prod.id} product={prod} />;
        })}
      </div>
    </section>
  );
};

export default MenuSection;
