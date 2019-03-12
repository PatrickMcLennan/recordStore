import styled from 'styled-components';

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
      
    &:first-of-type {
      ${props =>
        props.show
          ? ({ theme: { transforms } }) => transforms.whiteFill.active
          : ({ theme: { transforms } }) => transforms.whiteFill.rest}
    }

    &:nth-of-type(2),
    &:nth-of-type(3) {
      position: absolute;
      top: -100%;
    }

    &:nth-of-type(2) {
      right: 35%;
    }
    &:nth-of-type(3) {
      left: 35%;
    }

    &:hover,
    &:active {
      ${({ theme: { transforms } }) => transforms.whiteFill.active}
    }
  }
`;

export default SortList;
