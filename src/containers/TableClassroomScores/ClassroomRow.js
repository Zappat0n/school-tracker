import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ComboBox from './ComboBox';

const ClassroomRow = ({ presentationId, handleChange }) => {
  const presentation = useSelector(
    (state) => state.classroomTable.presentations.filter((value) => value.id === presentationId)[0],
  );
  const students = useSelector((state) => state.classroomTable.students);

  return (
    <>
      <tr className="row">
        <td>{presentation.name}</td>
        {
        (students || []).map((student) => (
          <ComboBox
            key={student.id}
            presentation={presentationId}
            student={student.id}
            handleChange={(event, presentation, student, id) => {
              handleChange(event, presentation, student, id);
            }}
          />
        ))
        }
      </tr>
    </>
  );
};

ClassroomRow.propTypes = {
  presentationId: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ClassroomRow;
