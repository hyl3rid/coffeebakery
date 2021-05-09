import React from 'react';
import styled from 'styled-components';

const SButton = styled.button`
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
`;

function Button({ primary, small, onClick, type, disabled, children }) {
  return (
    <SButton
      type={type}
      disabled={disabled}
      primary={primary}
      small={small}
      onClick={onClick}
    >
      {children}
    </SButton>
  );
}

export default Button;
