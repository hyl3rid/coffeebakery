import React from 'react';
import styled from 'styled-components';
import { MenuSection, Spinner, Filter } from '../components/';
import { PainAuChocolat } from '../assets';
import useFetchFirestore from '../useHooks/useFetchFirestore';

const Wrapper = styled.section`
  .cover {
    margin-top: 9rem;
    height: 35rem;
    background-image: url(${PainAuChocolat});
    background-size: cover;
    background-position: center 75%;
  }

  .menu {
    padding: 10rem 10rem 5rem 10rem;
  }

  .menu .heading-2 {
    text-align: center;
    margin-bottom: 5rem;
  }

  .menu .subheading {
    text-align: center;
    margin-bottom: 5rem;
  }

  .menu .container {
    display: flex;
  }

  .menu .products-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
  }

  .menu .products-list .product {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
    margin-bottom: 5rem;
    max-width: 100%;
  }

  .menu .products-list .product img {
    object-fit: cover;
    width: 100%;
    height: 22rem;
  }

  @media only screen and (max-width: 900px) {
    .menu .products-list {
      justify-items: center;
    }

    .menu .products-list .product {
      grid-template-columns: 1fr;
      text-align: center;
      max-width: 30rem;
    }
  }

  @media only screen and (max-width: 600px) {
    .menu {
      padding: 10rem 0;
      justify-content: center;
    }

    .menu .products-list {
      grid-template-columns: 1fr;
      object-fit: 100%;
    }
  }
`;

function Menu() {
  const allProducts = useFetchFirestore();

  return (
    <Wrapper>
      <div className='cover'></div>
      <article className='menu'>
        <h2 className='heading-2'>Our Menu</h2>
        <div className='container'>
          {/* <Filter /> */}
          {/* <div> */}
            <MenuSection title='Salad' type='salad' />
            <MenuSection title='Pastry' type='pastry' />
            <MenuSection title='Sandwich' type='sandwich' />
            <MenuSection title='Soup' type='soup' />
            <MenuSection title='Cookies' type='cookie' />
            <MenuSection title='Tart' type='tart' />
            <MenuSection title='Cake' type='cake' />
            <MenuSection title='Bread' type='bread' />
            <MenuSection title='Hot Drink' type='hotdrink' />
            {allProducts.length === 0 && <Spinner />}
          {/* </div> */}
        </div>
      </article>
    </Wrapper>
  );
}

export default Menu;
