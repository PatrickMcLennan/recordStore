import Header from './styles/SectionHeader.styles';
import PropTypes from 'prop-types';

const SectionHeader = ({ first, last }) => (
  <Header>
    <span>{first}</span>/<span>{last}</span>
  </Header>
);

SectionHeader.propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired
};

export default SectionHeader;
