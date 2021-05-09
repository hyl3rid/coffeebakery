import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { media } from './utils/media';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, Menu, About, Contact } from './pages';

const GlobalStyle = createGlobalStyle`
:root {
  --color-grey-light: #fbfbfb;
  --color-grey-dark: #222222;
  --paragraph-font-size: 1.6rem;
  --paragraph-bigger: 2rem;
}

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: var(--color-grey-light);
}

// Headings

.heading-1 {
  font-size: 5rem;
  font-weight: 400;
  padding-bottom: 5rem;
}

.heading-2 {
  font-size: 3.5rem;
  font-weight: 400;
}

.heading-3 {
  font-size: 3rem;
  font-weight: 400;
}

.heading-4 {
  font-size: 2.5rem;
  font-weight: 400;
}

// Paragraph

p,
label,
figcaption,
input[type='text'],
input[type='email'] {
  font-size: var(--paragraph-font-size);
  font-family: 'Montserrat', sans-serif;
}

@media only screen and ${media.six} {
  html {
    font-size: 50%;
  }
}

@media only screen and ${media.one} {
  html {
    font-size: 55%
  }
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <Route path='/menu'>
            <Menu />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
