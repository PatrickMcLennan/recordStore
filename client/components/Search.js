import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import { RecordGrid, AddHeader } from './styles/Store.styles';
import Record from './Record';
import Sort from './Sort';
import Form from './styles/form.styles';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    search: '',
    searchedUser: {},
    sort: 'artist'
  };

  changeSort = (property = 'artist') => {
    const { records } = this.state;
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
    const searchedUser = await searchRecords(this.state.search);
    this.setState({
      records: searchedUser.records
    });
  };

  render() {
    const { search, searchedUser, records } = this.state;
    return (
      <>
        <SectionHeader data-testid="search_header" first="Find" last="Stores" />
        <Sort changeSort={this.changeSort} />
        <Form data-testid="search_form" onSubmit={this.handleSubmit}>
          <input
            data-testid="search_input"
            type="text"
            value={search}
            onChange={this.handleChange}
          />
          <input type="submit" value="search" />
        </Form>
        <RecordGrid data-testid="search_recordGrid">
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
