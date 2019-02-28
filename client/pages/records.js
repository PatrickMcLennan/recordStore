import styled from 'styled-components';

const Records = ({ user }) => (
  <div>
    <p>{user ? 'Something is wrong' : 'No user on records page'}</p>
  </div>
);

export default Records;
