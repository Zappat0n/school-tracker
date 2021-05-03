import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TableClassroomScores from '../../containers/TableClassroomScores/TableClassroomScores';

const ClassroomScores = ({ setErrors, setTitle }) => {
  const { id } = useParams();
  useEffect(() => setTitle('Classroom Scores'), []);

  return (
    <>
      <TableClassroomScores
        id={id}
        handleError={(messages) => setErrors(messages)}
      />
    </>
  );
};

ClassroomScores.propTypes = {
  setErrors: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default ClassroomScores;
