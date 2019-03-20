import React, { Component } from 'react';
import SortList from './styles/Sort.styles';
import PropTypes from 'prop-types';

class Sort extends Component {
  state = { show: false };
  render() {
    const { show } = this.state;
    const { changeSort } = this.props;
    return (
      <SortList data-testid="sort">
        <li
          data-testid="sort_button"
          onClick={() => this.setState({ show: !show })}>
          Sort
        </li>
        {show && (
          <>
            <li data-testid="sort_album" onClick={() => changeSort('title')}>
              Album <span>A - Z</span>
            </li>
            <li data-testid="sort_artist" onClick={() => changeSort('artist')}>
              Artist <span>A - Z</span>
            </li>
          </>
        )}
      </SortList>
    );
  }
}

Sort.propTypes = {
  changeSort: PropTypes.func.isRequired
};

export default Sort;
