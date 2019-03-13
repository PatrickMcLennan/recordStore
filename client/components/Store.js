import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import { StoreSection, RecordGrid } from './styles/Store.styles';
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
    this.setState({ sort: property });
  };

  reRender = () => {
    this.renderGrid();
  };

  renderGrid = () => {
    const { records, sort } = this.state;
    const { deleteRecord } = this.props;
    const sorted = records.sort((a, b) =>
      a[sort].toLowerCase() > b[sort].toLowerCase() ? 1 : -1
    );
    return sorted.map(record => (
      <Record
        artist={record.artist}
        title={record.title}
        cover={record.cover}
        key={record.id}
        id={record.id}
        deleteRecord={deleteRecord}
        renderGrid={this.renderGrid}
      />
    ));
  };

  render() {
    const { records } = this.state;
    return (
      <StoreSection>
        <SectionHeader first="My" last="Store" />
        <Sort changeSort={this.changeSort} />
        <RecordGrid>
          {records.length >= 1 ? (
            this.renderGrid()
          ) : (
            <h6>Get Started by adding some records!</h6>
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
  changePage: PropTypes.func.isRequired,
  deleteRecord: PropTypes.func.isRequired
};

export default Store;
