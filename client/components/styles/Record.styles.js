import styled from 'styled-components';

const RecordFigure = styled.figure`
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 1fr;
  grid-template-rows: 200px;
  grid-row-gap: 20px;

  div {
    grid-area: 1 / 1 / 2 / 2;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  figcaption {
    grid-area: 1 / 2 / 2 / 3;
    padding-left: 1vw;
    ${({ theme: { flexin } }) => flexin('space-evenly', 'flex-start', 'column')}
    position: relative;

    & > * {
      ${({ theme: { typo } }) => typo.letterSpacingPrimary}
    }

    p {
      text-transform: uppercase;
      align-self: center;
      text-align: center;
      font-size: 2.5rem;
      font-weight: 100;
    }

    p:last-of-type {
      text-align: left;
      font-style: italic;
      align-self: flex-start;
      font-weight: 300;
      text-transform: uppercase;
    }
  }
`;

export default RecordFigure;
