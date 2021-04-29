import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import TableClassroomScores from '../../containers/TableClassroomScores/TableClassroomScores';

const ClassroomScores = ({ setErrors }) => {
  const { id } = useParams();
  return (
    <>
      <TableClassroomScores
        id={id}
        title="Classroom Scores"
        handleError={(messages) => setErrors(messages)}
      />
    </>
  );
};

ClassroomScores.propTypes = {
  setErrors: PropTypes.func.isRequired,
};

export default ClassroomScores;
