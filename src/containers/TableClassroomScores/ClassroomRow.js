import PropTypes from 'prop-types';
import ComboBox from './ComboBox';

const ClassroomRow = ({ presentation, students, handleChange }) => (
  <>
    <tr className="row">
      <td>{presentation.name}</td>
      {
      (students || []).map((student) => (
        <ComboBox
          key={student.id}
          presentation={presentation.id}
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

ClassroomRow.propTypes = {
  presentation: PropTypes.instanceOf(Object).isRequired,
  students: PropTypes.instanceOf(Object).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ClassroomRow;
