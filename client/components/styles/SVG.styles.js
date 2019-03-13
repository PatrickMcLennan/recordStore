import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const showMsg = keyframes`
  0% {
    right: -5vh;
  }

  10% {
    right: 5vh;
  }

  90% {
    right: 5vh;
  }

  100% {
    right: -5vh
  }
`;

export const Vinyl = styled.svg`
  ${({ theme: { flexin } }) => flexin()}
  stroke: ${({ theme: { colors } }) => colors.whitePrimary};
  fill: rgba(255, 255, 255, 0.25);
  height: 10rem;
  margin-bottom: 5vh;
  animation: ${rotate} 10s linear infinite;
  z-index: 10;
`;

export const VinylError = styled(Vinyl)`
  stroke: red;
  fill: red;
  position: fixed;
  bottom: 0;
  right: 5vh;
  animation: ${showMsg} 2s ease-in-out, ${rotate} 10s linear infinite;
`;

export const VinylSuccess = styled(Vinyl)`
  stroke: green;
  fill: green;
  position: fixed;
  bottom: 0;
  right: 5vh;
  animation: ${showMsg} 2s ease-in-out, ${rotate} 10s linear infinite;
`;

export const Garbage = styled.svg`
  stroke: ${({ theme: { colors } }) => colors.whitePrimary};
  cursor: pointer;
  height: 25px;
  width: 25px;
  transform-origin: bottom-right;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;
