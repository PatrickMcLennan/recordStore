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
    opacity: 0;
    right: -5vh;
  }

  10% {
    opacity: 1;
    right: 5vh;
  }

  90% {
    opacity: 1;
    right: 5vh;
  }
  100% {
    opacity: 0;
    right: -5vh;
  }
`;

export const Vinyl = styled.svg`
  stroke: ${({ theme: { colors } }) => colors.whitePrimary};
  fill: rgba(255, 255, 255, 0.1);
  height: 10rem;
  margin-bottom: 5vh;
  animation: ${rotate} 15s linear infinite;
  z-index: 10;
`;

const VinylMsg = styled(Vinyl)`
  position: fixed;
  bottom: 0;
  right: 5vh;
  animation: ${showMsg} 2s ease-in-out 0, ${rotate} 10s linear infinite;
`;

export const VinylError = styled(VinylMsg)`
  stroke: red;
  fill: rgba(255, 255, 255, 0.1);
`;

export const VinylSuccess = styled(VinylMsg)`
  stroke: green;
  fill: rgba(255, 255, 255, 0.1);
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

export const Social = styled.svg`
  stroke: ${({ theme: { colors } }) => colors.whitePrimary};
  fill: rgba(255, 255, 255, 0.75);
  height: 6rem;
  padding: 1rem;
`;
