import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTitle } from '../../slices/userSlice';
import { getIndex, postEvent, updateEvent } from '../../api/queries';
import ClassroomRow from './ClassroomRow';
import {
  saveScore, savePresentations, saveScores, saveStudents,
} from '../../slices/classroomTableSlice';
import './TableClassroomScores.scss';

const TableClassroomScores = ({ id, title }) => {
  const request = `classrooms/${id}/scores/`;
  const table = useSelector((state) => state.classroomTable);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const getScore = (value) => {
    switch (value) {
      case ' ': return 0;
      case '/': return 1;
      case 'ꓥ': return 2;
      case '𐊅': return 3;
      default: return '';
    }
  };

  async function requestData() {
    if (!token) return;
    const response = {
      tableName: request,
      data: await getIndex(token, request),
    };
    if (response && response.data) {
      dispatch(saveStudents(response.data.students));
      dispatch(savePresentations(response.data.presentations));
      dispatch(saveScores(response.data.events));
    }
  }

  async function updateScore(event, presentation, student, id) {
    event.preventDefault();
    const score = getScore(event.target.value);
    if (!token) return;
    const response = (!id) ? await postEvent(token, new Date().toISOString().split('T')[0], student, presentation, score)
      : await updateEvent(token, id, new Date().toISOString().split('T')[0], student, presentation, score);

    if (response) {
      // id = response;
      dispatch(saveScore({
        presentation,
        student,
        score,
      }));
    }
  }

  useEffect(() => {
    dispatch(changeTitle(title));
    requestData();
  }, []);

  return (
    <div className="container-table-scores">
      {table.students.length > 0 && table.presentations.length > 0 && (
        <div className="table">
          <table>
            <thead className="table-classroom-head">
              <tr>
                {(table.students ? [{ id: 0 }].concat(table.students) : []).map(
                  (student, index) => (<th className={`column${index + 1}`} key={student.id}>{student.name}</th>),
                )}
              </tr>
            </thead>
            <tbody className="table-body">
              {
              (table.presentations ? table.presentations.slice(0, 10) : []).map(
                (presentation) => (
                  <ClassroomRow
                    key={presentation.id}
                    presentationId={presentation.id}
                    handleChange={updateScore}
                  />
                ),
              )
              }
              {/* table.data.map((row) => <Row key={row.id} data={row} />) */}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

TableClassroomScores.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TableClassroomScores;
