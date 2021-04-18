import PropTypes from 'prop-types';
import filterKeys from '../TableUtils';

const Row = (props) => {
  const { data, handleClik } = props;

  return (
    <tr key={data.id} className="row" onClick={() => handleClik()}>
      {filterKeys(Object.keys(data)).map((key, index) => (<td className={`column${index + 1}`} key={key}>{data[key]}</td>))}
    </tr>
  );
};

Row.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  handleClik: PropTypes.func.isRequired,
};

export default Row;
