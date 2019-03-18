import React, { Component } from 'react';
import NavBar from './styles/Nav.styles';
import PropTypes from 'prop-types';
import Badge from './styles/UserBadge.styles';
import Loader from './Loader';

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
    const { user } = this.props;
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
                data-testid="nav_signOut"
                className={open ? 'opened' : 'closed'}
                style={{ transitionDelay: '0s' }}
                onClick={() => this.logout()}>
                Sign Out
              </li>
              <li
                data-testid="nav_account"
                className={open ? 'opened' : 'closed'}
                style={{ transitionDelay: '.1s' }}
                onClick={() => this.followLink('account')}>
                Account
              </li>
              <li
                data-testid="nav_myStore"
                className={open ? 'opened' : 'closed'}
                style={{ transitionDelay: '.2s' }}
                onClick={() => this.followLink('store')}>
                My Store
              </li>
              <li
                data-testid="nav_addRecord"
                className={open ? 'opened' : 'closed'}
                style={{ transitionDelay: '.3s' }}
                onClick={() => this.followLink('add')}>
                +
              </li>
            </>
          )}
        </ul>
        <Badge
          data-testid="nav_badge"
          src={
            user && user.picture
              ? user.picture
              : '../static/img/placeholder.png'
          }
          alt={user && user.name.first ? user.name.picture : 'User Picture'}
          margin="right"
          onClick={() => this.setState({ open: !open })}
        />
        {open && <Loader onClick={() => this.setState({ open: !open })} />}
      </NavBar>
    );
  }
}

Nav.propTypes = {
  user: PropTypes.object,
  changePage: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default Nav;
