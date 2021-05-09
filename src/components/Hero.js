import React from 'react';
import styled from 'styled-components';
import { CoffeeMachine } from '../assets';

const Wrapper = styled.section`
  .hero {
    margin-top: 9rem;
    position: relative;
    height: 63rem;
    background-image: linear-gradient(rgba(0, 0, 0, 40%), rgba(0, 0, 0, 40%)),
      url(${CoffeeMachine});
    background-position: 50% 70%;
    background-size: cover;
    color: #fff;

    & .heading-text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }
`;

function Hero() {
  return (
    <Wrapper>
      <section className='hero'>
        <div className='heading-text'>
          <h1 className='heading-1'>Coffee & Bakery</h1>
          <h2 className='heading-2'>
            Enjoy a pleasant <br />
            time
          </h2>
        </div>
      </section>
    </Wrapper>
  );
}

export default Hero;
