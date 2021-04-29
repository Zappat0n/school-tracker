import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTitle } from '../../reducers/actions';
import { getIndex } from '../../api/queries';
import { filterKeys, getCommands } from '../Table/TableUtils';
import Row from './Row';
import '../Table/Table.scss';

const TableStudentScores = ({ id, title, handleError }) => {
  const request = `/students/${id}`;
  const commands = getCommands(request);
  const [table, setTable] = useState([]);
  const dispatch = useDispatch();

  async function requestData() {
    const response = {
      tableName: request,
      data: await getIndex(request),
    };
    if (response && response.data) setTable(response);
    else handleError(response.errors);
  }

  const formatColumn = (text) => (text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()).replace('_', ' ').trim();

  useEffect(() => {
    dispatch(changeTitle(title));
    requestData();
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
  handleError: PropTypes.func.isRequired,
};

export default TableStudentScores;
