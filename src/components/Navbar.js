import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';
import { NavLink } from 'react-router-dom';
import { links } from '../utils/constants';

const Wrapper = styled.header`
  .header {
    height: 9rem;
    width: 100%;
    background-color: #000;
    color: #fff;
    padding: 0 10rem;
    font-weight: bold;
    font-size: var(--paragraph-bigger);
    position: fixed;
    z-index: 10;
    top: 0;

    & .navbar {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & .items {
        display: flex;
        justify-content: flex-end;
        list-style-type: none;
        height: 100%;

        & a {
          text-decoration: none;
          margin-left: 5rem;
          color: #fff;
          height: 100%;
          display: flex;
          align-items: center;

          &:hover {
            color: #dbb173;
          }

          &.selected {
            color: #dbb173;
            border-bottom: 0.4rem solid;
          }
        }
      }

      & .logo {
        font-size: 3rem;
      }

      & .hamburger {
        display: none;

        & .bar {
          display: block;
          width: 2.5rem;
          height: 0.3rem;
          margin: 0.5rem auto;
          transition: all 0.3s ease-in-out;
          background-color: #fff;
        }
      }
    }
  }

  @media only screen and ${media.two} {
    .header .navbar {
      & .items {
        position: fixed;
        left: -100%;
        top: 9rem;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background-color: var(--color-grey-dark);
        width: 100%;
        height: 25rem;
        text-align: center;
        transition: 0.3s;
        z-index: 10;

        & a {
          margin: 0;

          &.selected {
            color: #dbb173;
            border-bottom: none;
          }
        }

        &.active {
          left: 0;
        }
      }

      & .hamburger {
        display: inline-block;
        cursor: pointer;

        &.active .bar:nth-child(2) {
          opacity: 0;
        }

        &.active .bar:nth-child(1) {
          transform: translateY(0.8rem) rotate(45deg);
        }

        &.active .bar:nth-child(3) {
          transform: translateY(-0.8rem) rotate(-45deg);
        }
      }
    }
  }

  @media only screen and ${media.one} {
    .header {
      padding: 0 5rem;
    }
  }
`;

function Navbar() {
  const [click, setClick] = useState(false);

  const container = React.createRef();

  const handleClick = () => setClick(!click);

  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setClick(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [click, handleClickOutside]);

  return (
    <Wrapper>
      <header className='header' ref={container}>
        <nav className='navbar'>
          <h3 className='logo'>LOGO</h3>
          <ul className={click ? 'items active' : 'items'}>
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <NavLink exact to={url} activeClassName='selected' onClick={handleClick}>
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div
            className={click ? 'hamburger active' : 'hamburger'}
            onClick={handleClick}
          >
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </nav>
      </header>
    </Wrapper>
  );
}

export default Navbar;
