import { css } from 'styled-components';

const sizes = {
  ten: 1000,
  nine: 900,
  eight: 800,
  seven: 700,
  six: 600,
  six: 500,
  six: 400
};

const media = Object.keys(sizes).reduce((final, size) => {
  return {
    ...final,
    [size]: function(...args) {
      return css`
        @media (max-width: ${sizes[size]}px) {
          ${css(...args)}
        }
      `;
    }
  };
}, {});

export default media;
