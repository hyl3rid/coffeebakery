import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { homeProducts } from '../utils/constants';
import Button from './Button';


const Wrapper = styled.section`
  .products {
    margin: 10rem;
    text-align: center;

    & .heading-2 {
      margin-bottom: 5rem;
    }

    & .heading-3 {
      margin-bottom: 5rem;
    }

    & .products-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 5rem;
      justify-items: center;

      & .product-item {
        max-width: 30rem;

        & img {
          object-fit: cover;
          width: 100%;
        }

        & figcaption {
          margin-top: 2.5rem;
          margin-bottom: 5rem;

          & .heading-4 {
            margin-bottom: 2.5rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1100px) {
    .products .products-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width: 600px) {
    .products {
      margin: 10rem 0;

      & .products-grid {
        grid-template-columns: 1fr;
        justify-content: center;
      }
    }
  }
`;

function Products() {
  return (
    <Wrapper>
      <section className='products'>
        <h2 className='heading-2'>Our Products</h2>
        <h3 className='heading-3'>
          Vivamus fermentum, <br />
          neque egestas.
        </h3>
        <article>
          <div className='products-grid'>
            {homeProducts.map((product) => {
              const { id, img, subTitle, text } = product;
              return (
                <figure key={id} className='product-item'>
                  <img src={img} alt='coffee cup' />
                  <figcaption>
                    <h4 className='heading-4'>{subTitle}</h4>
                    {text}
                  </figcaption>
                </figure>
              );
            })}
          </div>
          <Link to='/menu'>
            <Button primary>Menu</Button>
          </Link>
        </article>
      </section>
    </Wrapper>
  );
}

export default Products;
