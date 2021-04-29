import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import requestTable from './TableQueries';
import { changeTitle } from '../../reducers/actions';
import { filterKeys, getCommands } from './TableUtils';
import Row from './Row';
import './Table.scss';

const Table = ({
  tableName, id, title, handleError,
}) => {
  const request = `${tableName}${id ? `/${id}` : ''}`;
  const commands = getCommands(request);
  const [table, setTable] = useState([]);
  const dispatch = useDispatch();

  async function query() {
    const response = await requestTable(request);
    if (response && response.data) setTable(response.data);
    else handleError(response.errors);
  }

  const formatColumn = (text) => (text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()).replace('_', ' ').trim();

  useEffect(() => {
    query();
    dispatch(changeTitle(title));
  }, [request]);

  return (
    <div className="container-table">
      {table && table.length > 0 && (
        <div className="table">
          <table>
            <thead className="table-head">
              <tr>
                {filterKeys(Object.keys(table[0])).map((value, index) => (
                  <th className={`column${index + 1}`} key={value}>{formatColumn(value)}</th>
                ))}
                {commands.length > 0 && <th key="commands">Commands</th>}
              </tr>
            </thead>
            <tbody className="table-body js-pscroll">
              {table.map(
                (row) => (
                  <Row
                    key={row.id}
                    data={row}
                    commands={commands}
                  />
                ),
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

Table.defaultProps = {
  id: undefined,
};

Table.propTypes = {
  tableName: PropTypes.string.isRequired,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  handleError: PropTypes.func.isRequired,
};

export default Table;
