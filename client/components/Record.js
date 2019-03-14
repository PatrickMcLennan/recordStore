import RecordFigure from './styles/Record.styles';
import PropTypes from 'prop-types';
import { GarbageSVG } from './SVGs';

const Record = ({ cover, title, artist, updateStore, id }) => (
  <RecordFigure>
    <div>
      <img src={cover} alt={title} />
    </div>
    <figcaption>
      <p>{title}</p>
      <p>{artist}</p>
      <GarbageSVG updateStore={updateStore} id={id} />
    </figcaption>
  </RecordFigure>
);

Record.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  updateStore: PropTypes.func.isRequired
};

export default Record;
