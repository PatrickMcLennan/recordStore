import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import { RecordGrid, AddHeader } from './styles/Store.styles';
import Record from './Record';
import Sort from './Sort';
import Form from './styles/form.styles';
import UserProfile from './styles/userProfile.styles';
import Badge from './styles/UserBadge.styles.js';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    search: '',
    sort: 'artist',
    searchedUser: {}
  };

  changeSort = (property = 'artist') => {
    const { records } = this.state.searchedUser;
    const sortedRecords = records.sort((a, b) =>
      a[property].toLowerCase() > b[property].toLowerCase() ? 1 : -1
    );
    this.setState({ records: sortedRecords, sort: property });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      search: value
    });
  };

  handleSubmit = async e => {
    const { searchRecords } = this.props;
    e.preventDefault();
    if (this.state.search === '') {
      return null;
    }
    const searchedUser = await searchRecords(this.state.search);
    if (searchedUser === null) {
      this.setState({ search: '' });
    } else if (searchedUser.email) {
      this.setState({
        searchedUser
      });
    }
  };

  render() {
    const { search, searchedUser } = this.state;
    const { records, name, email, picture, bio } = searchedUser;
    return (
      <>
        <SectionHeader
          first={records ? `${name.first}'s` || `${email}'s` : 'Find'}
          last="Store"
        />
        {records && <Sort changeSort={this.changeSort} />}
        <Form data-testid="search_form" onSubmit={this.handleSubmit}>
          <label htmlFor="search">
            <input
              data-testid="search_input"
              id="search"
              type="text"
              value={search}
              onChange={this.handleChange}
            />
            <p>users email</p>
          </label>
          <input type="submit" value="search" />
        </Form>
        <RecordGrid data-testid="search_recordGrid">
          {email && (
            <UserProfile data-testid="search_userProfile">
              <Badge
                src={picture ? picture : '../static/img/placeholder.png'}
                alt={name.first ? name.first : email}
                margin="left"
                data-testid="search_badge"
              />
              <figcaption>
                <h6 data-testid="search_name">
                  {name.first} {name.last}
                </h6>
                <h6 data-testid="search_bio">{bio}</h6>
              </figcaption>
            </UserProfile>
          )}
          {records ? (
            records.map(record => (
              <Record
                artist={record.artist}
                title={record.title}
                cover={record.cover}
                key={record.id}
                id={record.id}
                showGarbage={false}
              />
            ))
          ) : (
            <AddHeader data-testid="search_addHeader">
              Search for stores by email
            </AddHeader>
          )}
        </RecordGrid>
      </>
    );
  }
}

Search.propTypes = {
  searchRecords: PropTypes.func.isRequired
};

export default Search;
