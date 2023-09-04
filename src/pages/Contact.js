import React from 'react';
import styled from 'styled-components';
import { BakeryOutside } from '../assets';
import { ScrollToTop, MyMap, Form } from '../components';

const Wrapper = styled.section`
  .contact {
    margin-top: 9rem;
    padding: 10rem;
  }

  .contact .heading-2 {
    text-align: center;
  }

  .contact .container-form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
    margin-top: 5rem;
    margin-bottom: 10rem;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    .contact {
      padding: 10rem 0;
    }
  }

  @media only screen and (max-width: 600px) {
    .contact {
      padding: 4rem;
    }
    .contact .container-form {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      margin-bottom: 5rem;

      & img {
        grid-row-start: 1;
        display: block;
        padding-bottom: 2.5rem;
      }
    }
  }
`;

function Contact() {
  return (
    <Wrapper>
      <ScrollToTop />
      <section className='contact'>
        <h2 className='heading-2'>Contact Us</h2>
        <div className='container-form'>
          <Form />
          <img src={BakeryOutside} alt='' />
        </div>
        <MyMap />
      </section>
    </Wrapper>
  );
}

export default Contact;
