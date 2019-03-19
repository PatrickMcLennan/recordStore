import styled from 'styled-components';

const UserProfile = styled.figure`
  ${({ theme: { flexin } }) => flexin()};
  color: ${({ theme: { colors } }) => colors.whitePrimary};
  grid-area: 1 / 1 / -1 / 2;
  justify-self: stretch;
  justify-content: space-evenly;

  figcaption {
    flex: 1;
    ${({ theme: { flexin } }) => flexin('space-evenly', 'center', 'column')}

    h6 {
      ${({ theme: { typo } }) => typo.letterSpacingPrimary};
      font-size: 2.5rem;
      font-weight: 100;
      text-transform: uppercase;
      text-align: center;

      &:nth-of-type(2) {
        font-weight: 300;
        font-size: 2rem;
        margin-top: 1rem;
        text-transform: none;
      }
    }
  }
`;

export default UserProfile;
