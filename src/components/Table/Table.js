import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import requestTable from './TableQueries';
import { addTable } from '../../slices/userSlice';

const Table = ({ tableName }) => {
  const table = useSelector((state) => state.user.tables[tableName]);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  async function query() {
    if (!token) return;
    const response = await requestTable(tableName, token);
    if (response && response.data) dispatch(addTable(response));
  }

  if (!table) query();

  const filterKeys = (array) => array.filter((key) => !['id', 'created_at', 'updated_at'].includes(key));

  const addData = () => {
    const response = table.data.map((row) => (
      <tr key={row.id}>
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

Table.propTypes = {
  tableName: PropTypes.string.isRequired,
};

export default Table;
