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
          show={show ? 1 : 0}
          onClick={() => this.setState({ show: !show })}>
          Sort
        </li>
        {show && (
          <>
            <li data-testid="sort_album" onClick={() => changeSort('title')}>
              Album A - Z
            </li>
            <li data-testid="sort_artist" onClick={() => changeSort('artist')}>
              Artist A - Z
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
