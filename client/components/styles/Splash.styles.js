import styled from 'styled-components';
import media from './queries';

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  grid-gap: 2vw;

  div {
    ${({ theme: { flexin } }) => flexin('center', 'center', 'column')};
    align-self: stretch;
    text-align: center;

    h3 {
      font-size: 5rem;
      font-weight: 100;
      margin-bottom: 5vh;
    }
    p {
      font-size: 2rem;
      margin-bottom: 10vh;
    }
  }
`;

export default Section;
