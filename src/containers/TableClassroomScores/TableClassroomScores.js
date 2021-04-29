import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  saveScore, saveScores, changeTitle,
} from '../../reducers/actions';
import { getIndex, postEvent, updateEvent } from '../../api/queries';
import ClassroomRow from './ClassroomRow';
import './TableClassroomScores.scss';

const TableClassroomScores = ({ id, title, handleError }) => {
  const request = `events/${id}`;
  const [students, setStudents] = useState([]);
  const [presentations, setPresentations] = useState([]);
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
    const response = {
      tableName: request,
      data: await getIndex(request),
    };
    if (response && response.data) {
      setStudents(response.data.students);
      setPresentations(response.data.presentations);
      dispatch(saveScores(response.data.events));
    } else handleError(response.errors);
  }

  async function updateScore(event, presentation, student, eventId) {
    event.preventDefault();
    const score = getScore(event.target.value);
    const response = (!eventId) ? await postEvent(new Date().toISOString().split('T')[0], student, presentation, score)
      : await updateEvent(eventId, new Date().toISOString().split('T')[0], student, presentation, score);

    if (response) {
      dispatch(saveScore({
        id: response.id,
        presentation,
        student,
        score,
      }));
    } else handleError(response.errors);
  }

  useEffect(() => {
    dispatch(changeTitle(title));
    requestData();
  }, []);

  return (
    <div className="container-table-scores">
      {students && students.length > 0 && presentations.length > 0 && (
        <div className="table">
          <table>
            <thead className="table-classroom-head">
              <tr>
                {(students ? [{ id: 0 }].concat(students) : []).map(
                  (student, index) => (
                    <th className={`column${index + 1}`} key={student.id}>
                      <Link to={`/school-tracker/students/${student.id}`} className="head-link">
                        {student.name}
                      </Link>
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody className="table-classroom-body">
              {
              (presentations ? presentations.slice(0, 10) : []).map(
                (presentation) => (
                  <ClassroomRow
                    key={presentation.id}
                    presentation={presentation}
                    students={students}
                    handleChange={
                      (event, presentation, student, id) => {
                        updateScore(event, presentation, student, id);
                      }
                    }
                  />
                ),
              )
              }
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
  handleError: PropTypes.func.isRequired,
};

export default TableClassroomScores;
