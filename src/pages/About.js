import React from 'react';
import styled from 'styled-components';
import { Baker } from '../assets';
import { ScrollToTop } from '../components';

const Wrapper = styled.article`
  .about {
    margin-top: 9rem;
    padding: 10rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;

    & .container-img {
      justify-self: center;
      width: 80%;
      max-width: 40rem;

      & img {
        object-fit: cover;
        width: 100%;
      }
    }

    & .container-text {
      padding: 0 2.5rem;
    }

    & .heading-2 {
      text-align: center;
      margin-bottom: 2.5rem;
    }

    & p {
      padding-bottom: 2.5rem;
    }
  }

  @media only screen and (max-width: 1000px) {
    .about {
      margin-top: 0;
      grid-template-columns: 1fr;

      & .container-img {
        width: 100%;
        padding-bottom: 2.5rem;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .about {
      padding: 10rem 0;
    }
  }
`;

function About() {
  return (
    <Wrapper>
      <ScrollToTop />
      <article className='about'>
        <div className='container-img'>
          <img src={Baker} alt='baker' />
        </div>
        <div className='container-text'>
          <h2 className='heading-2'>History</h2>
          <p>
            Integer tincidunt rutrum lorem, eu tempor metus pulvinar et. Integer
            odio libero, ultricies eget hendrerit vitae, sodales ac ex. Praesent
            interdum sapien urna, eu varius eros pellentesque ut. Ut non mauris
            vitae ipsum vehicula lobortis. Donec eu nisl nisi. Nunc auctor massa
            a massa elementum ornare. Nunc bibendum arcu dolor, a feugiat risus
            vulputate ac. Sed ut justo leo. Phasellus porta, est non fermentum
            blandit, eros nibh commodo dolor, in euismod nisi ex vitae ipsum.
          </p>
          <p>
            Integer tincidunt rutrum lorem, eu tempor metus pulvinar et. Integer
            odio libero, ultricies eget hendrerit vitae, sodales ac ex. Praesent
            interdum sapien urna, eu varius eros pellentesque ut. Ut non mauris
            vitae ipsum vehicula lobortis. Donec eu nisl nisi. Nunc auctor massa
            a massa elementum ornare. Nunc bibendum arcu dolor, a feugiat risus
            vulputate ac. Sed ut justo leo. Phasellus porta, est non fermentum
            blandit, eros nibh commodo dolor, in euismod nisi ex vitae ipsum.
          </p>
        </div>
      </article>
    </Wrapper>
  );
}

export default About;
