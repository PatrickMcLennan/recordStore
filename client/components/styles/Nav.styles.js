import styled from 'styled-components';
import media from './queries';

const NavBar = styled.nav`
  position: relative;
  grid-row-start: 1;
  grid-row-end: 2;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 2.5vw;

  div {
    text-align: center;
    height: 100%;

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
    ${media.eleven`
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
    z-index: 10;
    transition: all 0.4s ease-out;
    transform-style: preserve-3d;
    transform-origin: 100%;
    perspective: 100rem;
    ${media.eleven`
      text-align: right;

      &.closed {
        transform: rotateY(90deg) translateY(200%);
        opacity: 0;
      }
      &.opened {
        transform: rotateY(0) translateY(0);
        opacity: 1;
      }
    `}
    &::after {
      content: '';
      display: block;
      height: 1px;
      background: white;
      width: 80%;
      margin: 0.5vh auto 0 auto;
      transition: all 0.3s ease-in-out;
      transform: scale(0);
      ${media.eleven`
        width: 60%;
        margin: .5vh 0 0 auto;
      `}
    }

    &:not(:first-child) {
      margin-left: 3.5rem;
      ${media.eleven`
      margin-top: 1rem;
    `}
    }

    &:hover,
    &:focus,
    &:active {
      &::after {
        transform: scale(1);
      }
    }
  }

  img {
    display: none;
    ${media.eleven`
      display: inline-block;
      cursor: pointer;
    `}
  }
`;

export default NavBar;
