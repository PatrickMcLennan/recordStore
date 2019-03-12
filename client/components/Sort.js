import React, { Component } from 'react';
import SortList from './styles/Sort.styles';
import PropTypes from 'prop-types';

class Sort extends Component {
  state = { show: false };
  render() {
    const { show } = this.state;
    const { changeSort } = this.props;
    return (
      <SortList>
        <li show={show} onClick={() => this.setState({ show: !show })}>
          Sort
        </li>
        {show && (
          <>
            <li onClick={() => changeSort('title')}>Album A - Z</li>
            <li onClick={() => changeSort('artist')}>Artist A - Z</li>
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
