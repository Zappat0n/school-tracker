import PropTypes from 'prop-types';
import filterKeys from '../TableUtils';

const Row = (props) => {
  const { data, handleClik } = props;

  return (
    <>
      <tr key={data.id} className="row" onClick={() => handleClik()}>
        {filterKeys(Object.keys(data)).map((key, index) => (
          <td className={`column${index + 1}`} key={key}>
            { /* <input type="text" value={data[key]} /> */}
            {data[key]}
          </td>
        ))}
        <td className="buttons">
          <button type="button">
            <i className="fas fa-edit" />
          </button>
        </td>
      </tr>
    </>
  );
};

Row.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  handleClik: PropTypes.func.isRequired,
};

export default Row;
