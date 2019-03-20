import styled, { createGlobalStyle } from 'styled-components';
import media from './queries';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: 'Lato';
  max-width: 100vw;
}
::selection {
  background-color: white;
  color: white;
}
html {
  font-size: 62.5%;
  box-sizing: border-box;
  ${media.six`
    font-size: 50%;
  `}
}
body {
  display: grid;
  min-height: 100vh;
  max-width: 100vw;
  grid-template-rows: 15vh 75vh;
  background-image: linear-gradient(to right bottom, rgba(0,0,0,.75), rgba(0,0,0,.75)), url('./static/img/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  color: white;
}
a,
a:visited {
  text-decoration: none;
  color: currentColor
}
ul {
  list-style-type: none;
}
button {
  background: none;
  font-family: inherit;
  color: currentColor;
  border: none;
  cursor: pointer;
}
`;

export const theme = {
  colors: {
    whitePrimary: 'rgba(255,255,255,1)',
    whiteOpaque: 'rgba(255,255,255,.75)',
    blackPrimary: `rgba(0,0,0,1)`
  },
  flexin: (jc = 'center', ai = 'center', fd = 'row') =>
    `display: flex; justify-content: ${jc}; align-items: ${ai}; flex-direction: ${fd};`,
  transitions: {
    main: `transition: all 0.4s ease-in-out;`,
    half: `transition: all 0.2s ease-in-out;`
  },
  transforms: {
    whiteFill: {
      rest: `
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 50%,
        rgba(255, 255, 255, 1) 51%
      );
      background-size: 225%;
      background-position: left;
      transition: all 0.3s ease-in-out;`,
      active: `background-position: right; color: black;`
    }
  },
  typo: {
    letterSpacingPrimary: `letter-spacing: .35rem;`,
    letterSpacingSecondary: `letter-spacing: .175rem;`
  }
};

export const Content = styled.section`
  grid-row-start: 2;
  grid-row-end: -1;
  align-self: center;
`;
