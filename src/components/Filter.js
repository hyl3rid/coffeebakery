import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-right: 5rem;
  position: sticky;
  top: 14rem;
  height: 100%;

  .checkbox-control {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .section {
    margin-bottom: 2rem;
  }

  .range-control {
    margin-top: 1rem;
  }

  button {
    margin-top: 2rem;
    background-color: #d32222;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 3rem;
    border: none;
    outline: none;
  }

  button:hover {
    background-color: #ff2424;
  }
`;

const Filter = () => {
  return (
    <Wrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='section'>
          <h4 className='heading-4'>Category</h4>
          <div className='checkbox-control'>
            <label htmlFor='salads'>Salad</label>
            <input type='checkbox' id='salads' name='salads' />
          </div>

          <div className='checkbox-control'>
            <label htmlFor='pastry'>Pastry</label>
            <input type='checkbox' id='pastry' name='pastry' />
          </div>

          <div className='checkbox-control'>
            <label htmlFor='sandwich'>Sandwich</label>
            <input type='checkbox' id='sandwich' name='sandwich' />
          </div>

          <div className='checkbox-control'>
            <label htmlFor='soups'>Soup</label>
            <input type='checkbox' id='soups' name='soups' />
          </div>

          <div className='checkbox-control'>
            <label htmlFor='cookies'>Cookies</label>
            <input type='checkbox' id='cookies' name='cookies' />
          </div>

          <div className='checkbox-control'>
            <label htmlFor='tarts'>Tarts</label>
            <input type='checkbox' id='tarts' name='tarts' />
          </div>

          <div className='checkbox-control'>
            <label htmlFor='cakes'>Cakes</label>
            <input type='checkbox' id='cakes' name='cakes' />
          </div>

          <div className='checkbox-control'>
            <label htmlFor='breads'>Breads</label>
            <input type='checkbox' id='breads' name='breads' />
          </div>

          <div className='checkbox-control'>
            <label htmlFor='hotDrink'>Hot Drink</label>
            <input type='checkbox' id='hotDrink' name='hotDrink' />
          </div>
        </div>

        <h4 className='heading-4'>Price</h4>
        <div className='range-control'>
          <label htmlFor='price'>Price: $10</label>
          <input type='range' id='price' name='price' />
        </div>
      </form>
      <button>Clear Filters</button>
    </Wrapper>
  );
};

export default Filter;
