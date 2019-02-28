import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Meta from '../components/Meta';
import Nav from '../components/Nav';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  body {
    font-family: 'Lato';
  }
  a,
  a:visited {
    text-decoration: none;
    color: currentColor;
  }
`;

class Home extends Component {
  state = {
    loggedIn: false,
    user: {}
  };

  render() {
    return (
      <>
        <Meta />
        <GlobalStyle />
        <Nav user={this.state} />
        <div>
          <p>hello</p>
        </div>
      </>
    );
  }
}

export default Home;
