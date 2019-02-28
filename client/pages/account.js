import styled from 'styled-components';

const Account = ({ user }) => (
  <div>
    <p>{user ? 'Hello' : 'No user on account page'}</p>
  </div>
);

export default Account;
