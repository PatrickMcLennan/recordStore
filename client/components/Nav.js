import NavBar from './styles/Nav.styles';
import PropTypes from 'prop-types';

const Nav = ({ user, changePage, page, logout }) => (
  <NavBar>
    <div>
      <h1>recordStore</h1>
      <h2>what are you listening to?</h2>
    </div>
    <ul>
      {user ? (
        <>
          <li
            onClick={() => logout()}
            current={page === 'splash' ? true : false}>
            Sign Out
          </li>
          <li
            onClick={() => changePage('account')}
            current={page === 'account' ? true : false}>
            Account
          </li>
          <li
            onClick={() => changePage('store')}
            current={page === 'store' ? true : false}>
            My Store
          </li>
          <li
            onClick={() => changePage('add')}
            current={page === 'add' ? true : false}>
            +
          </li>
        </>
      ) : (
        <li
          onClick={() => changePage('splash')}
          current={page === 'splash' ? true : false}>
          Sign In
        </li>
      )}
    </ul>
  </NavBar>
);

Nav.propTypes = {
  user: PropTypes.object.isRequired,
  changePage: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired
};

export default Nav;
