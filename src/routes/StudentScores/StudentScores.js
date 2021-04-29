import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import TableStudentScores from '../../containers/TableStudentScores/TableStudentScores';

const StudentScores = ({ setErrors }) => {
  const { id } = useParams();
  return (
    <>
      <TableStudentScores
        id={id}
        title="Student scores"
        handleError={(messages) => setErrors(messages)}
      />
    </>
  );
};

StudentScores.propTypes = {
  setErrors: PropTypes.func.isRequired,
};

export default StudentScores;
