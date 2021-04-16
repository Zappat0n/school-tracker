import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import requestTable from './TableQueries';
import { addTable, changeTitle } from '../../slices/userSlice';
import './Table.scss';

const Table = ({ tableName, id, title }) => {
  const request = `${tableName}${id ? `/${id}` : ''}`;
  const table = useSelector((state) => state.user.tables[request]);
  const token = useSelector((state) => state.user.token);
  const history = useHistory();
  const dispatch = useDispatch();

  dispatch(changeTitle(title));

  async function query() {
    if (!token) return;
    const response = await requestTable(request, token);
    if (response && response.data) dispatch(addTable(response));
  }

  if (!table) query();

  const filterKeys = (array) => array.filter((key) => (!['id', 'created_at', 'updated_at'].includes(key) && !key.endsWith('_id')));

  const redirectTo = (rowId) => {
    if (!id) history.push(`/${tableName}${rowId ? `/${rowId}/` : ''}`);
  };

  const formatColumn = (text) => (text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()).replace('_', ' ');

  const addData = () => {
    const response = table.data.map((row) => (
      <tr key={row.id} className="row" onClick={() => redirectTo(row.id)}>
        {filterKeys(Object.keys(row)).map((key, index) => (<td className={`column${index + 1}`} key={key}>{row[key]}</td>))}
      </tr>
    ));
    return response;
  };

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
              </tr>
            </thead>
            <tbody className="table-body js-pscroll">
              {addData()}
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
