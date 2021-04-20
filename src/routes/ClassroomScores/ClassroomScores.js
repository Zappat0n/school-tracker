import { useParams } from 'react-router-dom';
import TableClassroomScores from '../../containers/TableClassroomScores/TableClassroomScores';

const ClassroomScores = () => {
  const { id } = useParams();
  return (
    <>
      <TableClassroomScores id={id} title="Classroom Scores" />
    </>
  );
};

export default ClassroomScores;
