import React from 'react';
import styled from 'styled-components';
import Mailchimp from 'react-mailchimp-form';

const Wrapper = styled.footer`
  .footer {
    padding: 10rem 10rem 0 10rem;
    background-color: #000;
    color: #fff;

    & .container {
      height: 100%;
      display: flex;
      justify-content: space-between;

      & .container-input {
        width: 45rem;

        & button {
          margin-bottom: 2.5rem;
          display: inline-block;
          width: ${(props) => (props.small ? 13 : 17)}rem;
          height: ${(props) => (props.small ? 5 : 6)}rem;
          color: ${(props) => (props.primary ? '#000' : '#fff')};
          font-size: var(--paragraph-bigger);
          font-family: 'Montserrat', sans-serif;
          background-color: transparent;
          border: ${(props) => (props.small ? 0.4 : 0.5)}rem solid;
          cursor: pointer;
          outline: none;

          &:hover {
            color: #dbb173;
            border: ${(props) => (props.small ? 0.4 : 0.5)}rem solid #dbb173;
          }
        }

        & input {
          margin-top: 2.5rem;
          margin-bottom: 2.5rem;
          width: 45rem;
          height: 4rem;
        }
      }
    }

    & .container-contact-us {
      width: 27.2rem;
      height: 20rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    & .copy {
      margin-top: 5rem;
      text-align: center;
    }
  }

  @media only screen and (max-width: 768px) {
    .footer {
      padding: 10rem 0 0 0;

      .container {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        text-align: center;

        & .container-contact-us {
          grid-row: 1/2;
          margin-bottom: 5rem;
        }

        & .container-input,
        & .container-input form input {
          width: 80%;
        }
      }
    }
  }
`;

function Footer() {
  const { REACT_APP_MAILCHIMP } = process.env;

  return (
    <Wrapper>
      <footer className='footer'>
        <div className='container'>
          <div className='container-input'>
            <label htmlFor='email' className='heading-4'>
              Subscribe to our mailer:
            </label>
            <Mailchimp
              onSubmit={(e) => e.preventDefault()}
              action={REACT_APP_MAILCHIMP}
              fields={[
                {
                  name: 'EMAIL',
                  placeholder: 'Email',
                  type: 'email',
                  required: true,
                },
              ]}
              messages={{
                sending: 'Sending...',
                success: 'Thank you for subscribing!',
                error: 'An unexpected internal error has occurred.',
                empty: 'You must write an e-mail.',
                duplicate: 'Too many subscribe attempts for this email address',
                button: 'Sign Up!',
              }}
            />
          </div>
          <div className='container-contact-us'>
            <h4 className='heading-4'>Contact Us</h4>
            <p>
              Address: <br />
              3109 Airplane Avenue, Wallingford, Connecticut, 06492, US
            </p>
            <p>Phone Number: 860-881-2479</p>
            <p>Email: contact@coffeebakery.com</p>
          </div>
        </div>
        <p className='copy'>&copy; {new Date().getFullYear()}</p>
      </footer>
    </Wrapper>
  );
}

export default Footer;
