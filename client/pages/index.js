import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  dbLogin,
  dbRegister,
  dbLogout,
  dbAccountEditor,
  dbCreateRecord,
  dbDeleteRecord,
  dbUserQuery
} from '../firebase';
import { GlobalStyle, Content, theme } from '../components/styles/index.styles';
import Meta from '../components/Meta';
import Nav from '../components/Nav';
import Splash from '../components/Splash';
import Store from '../components/Store';
import Account from '../components/Account';
import AddRecord from '../components/AddRecord';
import Search from '../components/Search';
import Loader from '../components/Loader';
import { VinylErrorSVG, VinylSuccessSVG } from './../components/SVGs';

class Home extends Component {
  state = {
    user: {},
    page: 'splash',
    loading: false,
    error: false,
    success: false
  };

  loaded = () => {
    this.setState({
      loading: false
    });
  };

  logout = () => {
    dbLogout();
    this.setState({
      user: {},
      page: 'splash',
      loading: true
    });
  };

  showMessage = response => {
    response === 'error'
      ? this.setState({ error: true })
      : this.setState({ success: true });
    setTimeout(
      () => this.setState({ loading: false, error: false, success: false }),
      1500
    );
  };

  changePage = nextPage => {
    const { page } = this.state;
    page === nextPage ? page : this.setState({ page: nextPage });
  };

  getUser = async ({ email, password, register }) => {
    this.setState({ loading: true });
    const attempt = { email, password };
    const call = await (register ? dbRegister(attempt) : dbLogin(attempt));
    call.email ? this.showMessage('success') : this.showMessage('error');
    this.setState({ user: call });
    this.changePage('store');
  };

  editUser = async user => {
    const editedUser = await dbAccountEditor(user);
    this.setState({ user: editedUser });
    this.showMessage('success');
  };

  createRecord = async record => {
    const { records } = this.state.user;
    const newRecord = await dbCreateRecord(record);
    records.push(newRecord);
    this.editUser(this.state.user);
  };

  deleteRecord = async id => {
    const { email } = this.state.user;
    const user = await dbDeleteRecord(id, email);
    await this.editUser(user);
  };

  searchRecords = async email => {
    const searchedUser = await dbUserQuery(email);
    if (searchedUser.email) {
      this.showMessage('success');
      return searchedUser;
    } else if (searchedUser === 'error') {
      this.showMessage('error');
      return null;
    }
  };

  renderPage = page => {
    const { user } = this.state;
    if (page === 'splash') {
      return <Splash getUser={this.getUser} loaded={this.loaded} />;
    } else if (page === 'store') {
      return (
        <Store
          page={page}
          loaded={this.loaded}
          user={user}
          deleteRecord={this.deleteRecord}
        />
      );
    } else if (page === 'account') {
      return <Account user={user} editUser={this.editUser} />;
    } else if (page === 'search') {
      return <Search searchRecords={this.searchRecords} />;
    } else if (page === 'add') {
      return <AddRecord createRecord={this.createRecord} />;
    }
  };

  render() {
    const { page, user, loading, error, success } = this.state;
    return (
      <>
        <Meta />
        <GlobalStyle />
        {loading && <Loader />}
        <Nav
          user={user.email ? user : null}
          changePage={this.changePage}
          logout={this.logout}
        />
        <ThemeProvider theme={theme}>
          <Content>
            {this.renderPage(page)}
            {error && <VinylErrorSVG />}
            {success && <VinylSuccessSVG />}
          </Content>
        </ThemeProvider>
      </>
    );
  }
}

export default Home;
