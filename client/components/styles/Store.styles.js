import styled from 'styled-components';

export const StoreSection = styled.section`
  display: grid;
  grid-template-rows: auto auto minmax(150px, auto);
  grid-template-columns: auto;

  h4 {
    grid-area: 1 / 1 / 2 / -1;
  }
  ul {
    grid-area: 2 / 1 / 3 / -1;
  }
`;

export const RecordGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 450px));
  grid-template-rows: repeat(auto-fill, auto);
  grid-area: 3 / 1 / -1 / -1;
  grid-gap: 2.5rem;
  justify-content: center;
  align-content: center;
  padding-top: 2.5rem;
`;
