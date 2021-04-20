import PropTypes from 'prop-types';
import ComboBox from './ComboBox';

const ClassroomRow = (props) => {
  const { id, presentation, students } = props;

  return (
    <>
      <tr key={presentation} className="row">
        <td>{presentation}</td>
        {(students || []).map(
          (student) => <ComboBox key={id} presentation={id} student={student} />,
        )}
      </tr>
    </>
  );
};

ClassroomRow.propTypes = {
  presentation: PropTypes.string.isRequired,
  students: PropTypes.instanceOf(Array).isRequired,
  id: PropTypes.number.isRequired,
  // events: PropTypes.instanceOf(Object).isRequired,
  // length: PropTypes.number.isRequired,
};

export default ClassroomRow;
