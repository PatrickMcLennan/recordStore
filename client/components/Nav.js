import React, { Component } from 'react';
import NavBar from './styles/Nav.styles';
import PropTypes from 'prop-types';
import Badge from './styles/UserBadge.styles';
import Backdrop from './Loader';

class Nav extends Component {
  state = {
    open: false
  };

  logout = () => {
    const { logout } = this.props;
    this.setState({ open: false });
    logout();
  };

  followLink = page => {
    const { changePage } = this.props;
    changePage(page);
    this.setState({ open: !open });
  };

  render() {
    const { user, page, changePage } = this.props;
    const { open } = this.state;
    return (
      <NavBar>
        <div>
          <h1>recordStore</h1>
          <h2>what are you listening to?</h2>
        </div>
        <ul>
          {user && (
            <>
              <li
                className={open ? 'opened' : 'closed'}
                style={{ transitionDelay: '0s' }}
                onClick={() => this.logout()}
                current={page === 'splash' ? '1' : '0'}>
                Sign Out
              </li>
              <li
                className={open ? 'opened' : 'closed'}
                style={{ transitionDelay: '.1s' }}
                onClick={() => changePage('account')}
                current={page === 'account' ? '1' : '0'}>
                Account
              </li>
              <li
                className={open ? 'opened' : 'closed'}
                style={{ transitionDelay: '.2s' }}
                onClick={() => changePage('store')}
                current={page === 'store' ? '1' : '0'}>
                My Store
              </li>
              <li
                className={open ? 'opened' : 'closed'}
                style={{ transitionDelay: '.3s' }}
                onClick={() => changePage('add')}
                current={page === 'add' ? '1' : '0'}>
                +
              </li>
            </>
          )}
        </ul>
        {user && (
          <Badge
            src={user.picture}
            alt={user.name.first}
            margin="right"
            onClick={() => this.setState({ open: !open })}
          />
        )}
        {open && <Backdrop onClick={() => this.setState({ open: !open })} />}
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
