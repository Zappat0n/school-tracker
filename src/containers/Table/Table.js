import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import requestTable from './TableQueries';
import { addTable, changeTitle, setError } from '../../slices/userSlice';
import { filterKeys, getCommands } from './TableUtils';
import Row from './Row';
import './Table.scss';

const Table = ({ tableName, id, title }) => {
  const request = `${tableName}${id ? `/${id}` : ''}`;
  const commands = getCommands(request);
  const table = useSelector((state) => state.user.tables[request]);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  async function query() {
    if (!token) return;
    const response = await requestTable(request, token);
    if (response && response.data) dispatch(addTable(response));
    else dispatch(setError(response.errors));
  }

  if (!table) query();

  const formatColumn = (text) => (text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()).replace('_', ' ').trim();

  useEffect(() => {
    dispatch(changeTitle(title));
  }, []);

  return (
    <div className="container-table">
      {table && table.data && table.data.length > 0 && (
        <div className="table">
          <table>
            <thead className="table-head">
              <tr>
                {filterKeys(Object.keys(table.data[0])).map((value, index) => (
                  <th className={`column${index + 1}`} key={value}>{formatColumn(value)}</th>
                ))}
                {commands.length > 0 && <th key="commands">Commands</th>}
              </tr>
            </thead>
            <tbody className="table-body js-pscroll">
              {table.data.map(
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
};

export default Table;
