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

  const filterKeys = (array) => array.filter((key) => !['id', 'created_at', 'updated_at'].includes(key));

  const redirectTo = (rowId) => {
    if (!id) history.push(`/${tableName}${rowId ? `/${rowId}/` : ''}`);
  };

  const addData = () => {
    const response = table.data.map((row) => (
      <tr key={row.id} className="row" onClick={() => redirectTo(row.id)}>
        {filterKeys(Object.keys(row)).map((key) => (<td key={key}>{row[key]}</td>))}
      </tr>
    ));
    return response;
  };

  return (
    <div className="table">
      {(table && table.data) ? (
        <table>
          <thead className="table-header">
            <tr>
              {filterKeys(Object.keys(table.data[0])).map((value) => (
                <th key={value}>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody className="table-body">
            {addData()}
          </tbody>
        </table>
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
