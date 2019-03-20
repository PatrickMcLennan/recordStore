import styled from 'styled-components';
import media from './queries';

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  grid-gap: 2vw;

  & > * {
    text-align: center;
  }

  div {
    ${({ theme: { flexin } }) => flexin('center', 'center', 'column')};
    align-self: stretch;
    text-align: center;
    padding: 0.5rem;

    h3 {
      font-size: 5rem;
      font-weight: 100;
      margin-bottom: 5vh;
    }
    p {
      font-size: 2rem;
      margin-bottom: 10vh;
      ${({ theme: { typo } }) => typo.letterSpacingSecondary}
      ${media.thirteen`
        margin-bottom: 2.5vh;
      `}
    }

    div {
      ${({ theme: { flexin } }) => flexin('center')}
      ${media.thirteen`
        margin-bottom: 5vh;
      `}
    }
  }
`;

export default Section;
