import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTable, changeTitle } from '../../slices/userSlice';
import { getIndex } from '../../api/queries';
import { filterKeys, getCommands } from '../Table/TableUtils';
import Row from './Row';
import '../Table/Table.scss';

const TableStudentScores = ({ id, title }) => {
  const request = `students/${id}/scores/`;
  const commands = getCommands(request);
  const table = useSelector((state) => state.user.tables[request]);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  async function query() {
    if (!token) return;
    const response = {
      tableName: request,
      data: await getIndex(token, request),
    };
    console.log(response);
    if (response && response.data) dispatch(addTable(response));
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

TableStudentScores.defaultProps = {
  id: undefined,
};

TableStudentScores.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default TableStudentScores;
