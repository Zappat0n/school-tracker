import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import TableStudentScores from '../../components/TableStudentScores/TableStudentScores';

const StudentScores = ({ setErrors, setTitle }) => {
  const { id } = useParams();
  useEffect(() => setTitle('Students scores'), []);

  return (
    <>
      <TableStudentScores
        id={id}
        handleError={(messages) => setErrors(messages)}
      />
    </>
  );
};

StudentScores.propTypes = {
  setErrors: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default StudentScores;
