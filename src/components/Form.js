import React from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
import useForm from '../useHooks/useForm';
import useModal from '../useHooks/useModal';
import Button from './Button';

const Wrapper = styled.div`
  .container-contact {
    & .heading-4 {
      margin-bottom: 1rem;
    }

    & .error-message {
      color: red;
      display: block;
      visibility: hidden;

      &.active {
        visibility: visible;
      }
    }

    & p {
      margin-bottom: 2rem;
      font-size: var(--paragraph-bigger);
    }
  }

  form input {
    width: 100%;
    height: 3rem;
    outline-color: #dbb173;
  }

  form textarea {
    width: 100%;
    height: 10rem;
    outline-color: #dbb173;
  }

  @media only screen and (max-width: 600px) {
    form {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;

      & .container-contact {
        width: 80%;
      }

      & img {
        display: none;
      }
    }
  }
`;

function Form() {
  const { isVisible, toggleModal } = useModal();

  const {
    inputs,
    handleInputChange,
    handleSubmit,
    serverState,
    handleEmailValidation,
  } = useForm(toggleModal);

  const { name, email, subject, message } = inputs;

  const styleTextarea = {
    fontSize: '1.6rem',
    fontFamily: "'Montserrat', sansSerif",
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div className='container-contact'>
          <p>Send us a message and we will get back to you!</p>

          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={handleInputChange}
          />

          <span
            className={
              serverState.submitted && !name
                ? 'error-message active'
                : 'error-message'
            }
          >
            Enter your name
          </span>

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            value={email}
            onChange={handleInputChange}
          />

          <span
            className={
              serverState.submitted && !handleEmailValidation(email)
                ? 'error-message active'
                : 'error-message'
            }
          >
            {email && !handleEmailValidation(email)
              ? 'Invalid email address'
              : 'Enter an email'}
          </span>

          <label htmlFor='subject'>Subject</label>
          <input
            type='text'
            name='subject'
            id='subject'
            value={subject}
            onChange={handleInputChange}
          />

          <span
            className={
              serverState.submitted && !subject
                ? 'error-message active'
                : 'error-message'
            }
          >
            Enter a subject
          </span>

          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            cols='80'
            rows='10'
            value={message}
            style={styleTextarea}
            onChange={handleInputChange}
          ></textarea>
          <span
            className={
              serverState.submitted && !message
                ? 'error-message active'
                : 'error-message'
            }
          >
            Enter a message
          </span>
          <Button primary type='submit' disabled={serverState.submitting}>
            Send
          </Button>
        </div>
      </form>
      <div>
        <Modal isVisible={isVisible} onToggleModal={toggleModal}>
          <p>The message has been successfully sent.</p>
        </Modal>
      </div>
    </Wrapper>
  );
}

export default Form;
