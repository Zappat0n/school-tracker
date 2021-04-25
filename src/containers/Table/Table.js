import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import requestTable from './TableQueries';
import { addTable, changeTitle } from '../../slices/userSlice';
import filterKeys from './TableUtils';
import Row from './Row';
import './Table.scss';

const Table = ({ tableName, id, title }) => {
  const request = `${tableName}${id ? `/${id}` : ''}`;
  const table = useSelector((state) => state.user.tables[request]);
  const token = useSelector((state) => state.user.token);
  const history = useHistory();
  const dispatch = useDispatch();

  async function query() {
    if (!token) return;
    const response = await requestTable(request, token);
    if (response && response.data) dispatch(addTable(response));
  }

  if (!table) query();

  const redirectTo = (rowId) => {
    if (!id) history.push(`/${tableName}${rowId ? `/${rowId}/` : ''}`);
  };

  const formatColumn = (text) => (text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()).replace('_', ' ');

  useEffect(() => {
    dispatch(changeTitle(title));
  }, []);

  return (
    <div className="container-table">
      {(table && table.data) ? (
        <div className="table">
          <table>
            <thead className="table-head">
              <tr>
                {filterKeys(Object.keys(table.data[0])).map((value, index) => (
                  <th className={`column${index + 1}`} key={value}>{formatColumn(value)}</th>
                ))}
                <th key="commands">Commands</th>
              </tr>
            </thead>
            <tbody className="table-body js-pscroll">
              {table.data.map(
                (row) => <Row key={row.id} data={row} handleClik={() => redirectTo(row.id)} />,
              )}
            </tbody>
          </table>
        </div>
      ) : ''}
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
