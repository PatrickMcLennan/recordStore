import RecordFigure from './styles/Record.styles';
import PropTypes from 'prop-types';

const Record = ({ cover, title, artist }) => (
  <RecordFigure>
    <div>
      <img src={cover} alt={title} />
    </div>
    <figcaption>
      <p>{title}</p>
      <p>{artist}</p>
    </figcaption>
  </RecordFigure>
);

Record.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired
};

export default Record;
