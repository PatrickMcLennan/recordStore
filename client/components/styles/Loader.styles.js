import styled from 'styled-components';

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
`;

export default Backdrop;
