import styled from 'styled-components';
import media from './queries';

const NavBar = styled.nav`
  position: relative;
  grid-row-start: 1;
  grid-row-end: 2;
  border: 1px solid red;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5vw 2.5vh 2.5vw;

  div {
    text-align: center;

    h1,
    h2 {
      font-weight: 100;
      letter-spacing: 0.3rem;
    }
    h1 {
      font-size: 5rem;

      &::after {
        content: '';
        display: block;
        height: 1px;
        background: white;
        width: 80%;
        margin: 0.5vh auto;
      }
    }
  }

  ul {
    display: flex;
    ${media.ten`
      flex-direction: column;
      position: absolute;
      top: 100%;
      right: 0;
    `}
  }

  li {
    cursor: pointer;
    font-size: 2rem;
    letter-spacing: 0.25rem;
    padding: 1rem 2rem;
    text-transform: uppercase;
    text-align: center;

    &::after {
      content: '';
      display: block;
      height: 1px;
      background: white;
      width: 80%;
      margin: 0.5vh auto 0 auto;
      transition: all 0.3s ease-in-out;
      transform: scale(${props => props.current});
    }

    &:not(:first-child) {
      margin-left: 3.5rem;
      ${media.ten`
      margin-top: 1rem;
    `}
    }

    &:hover {
      &::after {
        transform: scale(1);
      }
    }
  }

  img {
    display: none;
    ${media.ten`
      display: inline-block;
      cursor: pointer;
    `}
  }
`;

export default NavBar;
