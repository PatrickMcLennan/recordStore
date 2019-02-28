import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 2.5vw;
  margin: 2.5vh 0;
  border: 1px solid black;

  & h1 {
    font-size: 5rem;
    font-weight: 300;
    letter-spacing: 0.35rem;
    line-height: 1.5;
  }
`;

class Nav extends Component {
  state = {};

  render() {
    return (
      <Navigation>
        <h1>recordStore</h1>
        <ul>
          <li>
            <Link href="/user/:id">
              <a>Account</a>
            </Link>
          </li>
          <li>
            <Link href="/user/:id">
              <a>Your records</a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </li>
        </ul>
      </Navigation>
    );
  }
}

export default Nav;
