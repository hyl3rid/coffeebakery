import React from 'react';
import MenuProduct from './MenuProduct';
import { useProductsContext } from '../context/products_context';

const MenuSection = ({ title, type }) => {
  const { products: allProducts } = useProductsContext();
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
