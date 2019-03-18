import RecordFigure from './styles/Record.styles';
import PropTypes from 'prop-types';
import { GarbageSVG } from './SVGs';

const Record = ({ cover, title, artist, updateStore, id }) => (
  <RecordFigure data-testid="record">
    <div>
      <img data-testid="record_img" src={cover} alt={title} />
    </div>
    <figcaption>
      <p data-testid="record_title">{title}</p>
      <p data-testid="record_artist">{artist}</p>
      <GarbageSVG
        data-testid="record_garbage"
        updateStore={updateStore}
        id={id}
      />
    </figcaption>
  </RecordFigure>
);

Record.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  updateStore: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default Record;
