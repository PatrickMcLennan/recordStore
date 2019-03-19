import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import { StoreSection, RecordGrid, AddHeader } from './styles/Store.styles';
import Record from './Record';
import Sort from './Sort';
import PropTypes from 'prop-types';

class Store extends Component {
  state = {
    ...this.props.user,
    sort: 'artist'
  };

  componentDidMount() {
    const { page, loaded } = this.props;
    if (page === 'store') return loaded();
  }

  changeSort = (property = 'artist') => {
    const { records } = this.state;
    const sortedRecords = records.sort((a, b) =>
      a[property].toLowerCase() > b[property].toLowerCase() ? 1 : -1
    );
    this.setState({ records: sortedRecords, sort: property });
  };

  updateStore = async id => {
    const { deleteRecord } = this.props;
    await deleteRecord(id);
    this.setState({ records: this.props.user.records });
  };

  render() {
    const { records } = this.state;
    return (
      <StoreSection>
        <SectionHeader first="My" last="Store" />
        <Sort changeSort={this.changeSort} />
        <RecordGrid>
          {records.length >= 1 ? (
            records.map(record => (
              <Record
                artist={record.artist}
                title={record.title}
                cover={record.cover}
                key={record.id}
                id={record.id}
                updateStore={this.updateStore}
                showGarbage={true}
              />
            ))
          ) : (
            <AddHeader>Get Started by adding some records!</AddHeader>
          )}
        </RecordGrid>
      </StoreSection>
    );
  }
}

Store.propTypes = {
  page: PropTypes.string.isRequired,
  loaded: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  deleteRecord: PropTypes.func.isRequired
};

export default Store;
