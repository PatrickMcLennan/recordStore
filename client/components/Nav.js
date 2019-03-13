import React, { Component } from 'react';
import NavBar from './styles/Nav.styles';
import PropTypes from 'prop-types';
import Badge from './styles/UserBadge.styles';

class Nav extends Component {
  state = {
    mobileMenu: 'hidden'
  };

  render() {
    const { user, page, logout, changePage } = this.props;
    const { mobile, mobileMenu } = this.state;
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
                mobileMenu={mobileMenu}
                current={page === 'splash' ? true : false}>
                Sign Out
              </li>
              <li
                onClick={() => changePage('account')}
                mobileMenu={mobileMenu}
                current={page === 'account' ? true : false}>
                Account
              </li>
              <li
                onClick={() => changePage('store')}
                mobileMenu={mobileMenu}
                current={page === 'store' ? true : false}>
                My Store
              </li>
              <li
                onClick={() => changePage('add')}
                mobileMenu={mobileMenu}
                current={page === 'add' ? true : false}>
                +
              </li>
              <li>
                <Badge
                  src={user.picture}
                  alt={user.name.first}
                  onClick={() => this.setState({ mobile: !mobile })}
                  mobile={mobile}
                />
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
  }
}

Nav.propTypes = {
  user: PropTypes.object.isRequired,
  changePage: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired
};

export default Nav;
