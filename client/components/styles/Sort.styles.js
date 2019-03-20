import styled from 'styled-components';
import media from './queries';

const SortList = styled.ul`
  text-align: center;
  align-self: flex-end;
  position: relative;
  ${({ theme: { flexin } }) => flexin('space-around')}

  li {
    font-size: 2rem;
    line-height: 1.25;
    text-transform: uppercase;
    cursor: pointer;
    border: 1px solid white;
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    ${({ theme: { typo } }) => typo.letterSpacingPrimary}
    ${({ theme: { transforms } }) =>
      transforms.whiteFill.rest}

    &:nth-of-type(2),
    &:nth-of-type(3) {
      position: absolute;
      top: 0;
    }

    &:nth-of-type(2) {
      right: 70%;
      ${media.five`
        right: 65%;
      `}
    }
    &:nth-of-type(3) {
      left: 70%;
      ${media.five`
        left: 65%;
      `}
    }

    &:hover,
    &:focus,
    &:active {
      ${({ theme: { transforms } }) => transforms.whiteFill.active}
    }

    ${media.seven`
      span {
        display: block;
      }
    `}
  }
`;

export default SortList;
