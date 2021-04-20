import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addTable, changeTitle } from '../../slices/userSlice';
import { getIndex } from '../../api/queries';
import ClassroomRow from './ClassroomRow';
import './TableClassroomScores.scss';

const TableClassroomScores = ({ id, title }) => {
  const request = `classrooms/${id}/scores/`;
  const table = useSelector((state) => state.user.tables[request]);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  dispatch(changeTitle(title));

  async function query() {
    if (!token) return;
    const response = {
      tableName: request,
      data: await getIndex(token, request),
    };
    if (response && response.data) dispatch(addTable(response));
  }

  if (!table) query();
  console.log(table);
  return (
    <div className="container-table">
      {(table && table.data) ? (
        <div className="table">
          <table>
            <thead className="table-classroom-head">
              <tr>
                {(table.data.students ? ['Presentations'].concat(table.data.students) : []).map((value, index) => (
                  <th className={`column${index + 1}`} key={value.name}>{value.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="table-body">
              {
              (table.data.presentations ? table.data.presentations.slice(1, 10) : []).map(
                (value) => (
                  <ClassroomRow
                    key={value.name}
                    id={value.id}
                    presentation={value.name}
                    students={table.data.students.map((value) => value.id)}
                  />
                ),
              )
              }
              {/* table.data.map((row) => <Row key={row.id} data={row} />) */}
            </tbody>
          </table>
        </div>
      ) : ''}
    </div>
  );
};

TableClassroomScores.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TableClassroomScores;
