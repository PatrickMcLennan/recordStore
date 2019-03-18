import Header from './styles/SectionHeader.styles';
import PropTypes from 'prop-types';

const SectionHeader = ({ first, last }) => (
  <Header>
    <span data-testid="sectionHeader_first">{first}</span>/
    <span data-testid="sectionHeader_last">{last}</span>
  </Header>
);

SectionHeader.propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired
};

export default SectionHeader;
