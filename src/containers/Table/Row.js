import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { filterKeys } from './TableUtils';

const Row = (props) => {
  const { data, commands } = props;

  const drawButtons = () => (
    <td className="buttons">
      {commands.map((command) => (
        <Link key={command.name} to={command.route.replace(':id', data.id)} className="row-link">{command.name}</Link>
      ))}
    </td>
  );

  return (
    <>
      <tr key={data.id} className="row">
        {filterKeys(Object.keys(data)).map((key, index) => (
          <td className={`column${index + 1}`} key={key}>
            {data[key]}
          </td>
        ))}
        {commands.length !== 0 && drawButtons()}
      </tr>
    </>
  );
};

Row.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  commands: PropTypes.instanceOf(Array).isRequired,
};

export default Row;
