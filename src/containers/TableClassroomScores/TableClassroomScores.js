import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  saveScore, savePresentations, saveScores, saveStudents, changeTitle, setError,
} from '../../reducers/actions';
import { getIndex, postEvent, updateEvent } from '../../api/queries';
import ClassroomRow from './ClassroomRow';
import REACT_APP_NAME from '../../constants';
import './TableClassroomScores.scss';

const TableClassroomScores = ({ id, title }) => {
  const request = `events/${id}`;
  const table = useSelector((state) => state.classroomTableReducer);
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
      dispatch(saveStudents(response.data.students));
      dispatch(savePresentations(response.data.presentations));
      dispatch(saveScores(response.data.events));
    } else dispatch(setError(response.errors));
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
    } else dispatch(setError(response.errors));
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
                  (student, index) => (
                    <th className={`column${index + 1}`} key={student.id}>
                      <Link to={`${REACT_APP_NAME}/students/${student.id}`} className="head-link">
                        {student.name}
                      </Link>
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody className="table-classroom-body">
              {
              (table.presentations ? table.presentations.slice(0, 10) : []).map(
                (presentation) => (
                  <ClassroomRow
                    key={presentation.id}
                    presentationId={presentation.id}
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
};

export default TableClassroomScores;
