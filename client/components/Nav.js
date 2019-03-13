import React, { Component } from 'react';
import NavBar from './styles/Nav.styles';
import PropTypes from 'prop-types';
import Badge from './styles/UserBadge.styles';

class Nav extends Component {
  state = {
    status: 'hidden'
  };

  render() {
    const { user, page, logout, changePage } = this.props;
    return (
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
                current={page === 'splash' ? '1' : '0'}>
                Sign Out
              </li>
              <li
                onClick={() => changePage('account')}
                current={page === 'account' ? '1' : '0'}>
                Account
              </li>
              <li
                onClick={() => changePage('store')}
                current={page === 'store' ? '1' : '0'}>
                My Store
              </li>
              <li
                onClick={() => changePage('add')}
                current={page === 'add' ? '1' : '0'}>
                +
              </li>
              {/* <li>
                <Badge src={user.picture} alt={user.name.first} />
              </li> */}
            </>
          ) : (
            <li
              onClick={() => changePage('splash')}
              current={page === 'splash' ? '1' : '0'}>
              Sign In
            </li>
          )}
        </ul>
      </NavBar>
    );
  }
}

Nav.propTypes = {
  user: PropTypes.object,
  changePage: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired
};

export default Nav;
