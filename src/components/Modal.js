import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import Button from './Button';
import useOutsideClick from '../useHooks/useOutsideClick';

const SOverlay = styled.div`
  background-color: #000;
  height: 100vh;
  left: 0;
  opacity: 0.5;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;
`;

const SWrapper = styled.div`
  display: flex;
  justify-content: center;
  // left: 0;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;

  position: fixed;
  top: 35%;
  width: 100%;
  z-index: 5;
`;

const SModal = styled.div`
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  max-width: 50rem;
  position: relative;
  // z-index: 10;
`;

const SDescription = styled.div`
  text-align: center;
  margin: 3rem 0;

  & p {
    font-size: var(--paragraph-bigger);
  }
`;

const Modal = ({ isVisible, onToggleModal, children }) => {
  const ref = useRef();

  useOutsideClick(ref, () => {
    onToggleModal();
  });

  return (
    isVisible &&
    createPortal(
      <>
        <SOverlay />
        <SWrapper>
          <SModal ref={ref}>
            <SDescription>{children}</SDescription>
            <Button primary small onClick={onToggleModal}>
              Close
            </Button>
          </SModal>
        </SWrapper>
      </>,
      document.body
    )
  );
};

export default Modal;
