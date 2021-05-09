import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  margin-top: 1rem;
`;

function MenuProduct({ product: { img, name, description, price, type } }) {
  
  return (
    <div className='product'>
      <img src={img} alt='quiche' />
      <div>
        <h4 className='heading-4'>{name}</h4>
        <Paragraph>{description}</Paragraph>
        <Paragraph>Price: ${price}</Paragraph>
      </div>
    </div>
  );
}

export default MenuProduct;
