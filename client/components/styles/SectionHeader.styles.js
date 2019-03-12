import styled from 'styled-components';

const Header = styled.h4`
  display: flex;
  width: 100%;
  justify-content: center;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 5vh;
  font-size: 7rem;
  ${({ theme: { typo } }) => typo.letterSpacingPrimary};

  span {
    font-size: 3.75rem;
  }
  span:first-child {
    align-self: flex-start;
    margin-top: 0.5rem;
    text-align: center;
  }
  span:nth-child(2) {
    align-self: flex-end;
    margin-bottom: 0.5rem;
    text-align: left;
  }
`;

export default Header;
