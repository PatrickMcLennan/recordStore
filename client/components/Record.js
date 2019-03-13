import RecordFigure from './styles/Record.styles';
import PropTypes from 'prop-types';
import GarbageSVG from './GarbageSVG';

const Record = ({ cover, title, artist, deleteRecord, id, renderGrid }) => (
  <RecordFigure>
    <div>
      <img src={cover} alt={title} />
    </div>
    <figcaption>
      <p>{title}</p>
      <p>{artist}</p>
      <GarbageSVG deleteRecord={deleteRecord} id={id} renderGrid={renderGrid} />
    </figcaption>
  </RecordFigure>
);

Record.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  deleteRecord: PropTypes.func.isRequired,
  renderGrid: PropTypes.func.isRequired
};

export default Record;