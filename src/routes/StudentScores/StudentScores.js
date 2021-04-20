import { useParams } from 'react-router-dom';
import TableStudentScores from '../../containers/TableStudentScores/TableStudentScores';

const StudentScores = () => {
  const { id } = useParams();
  return (
    <>
      <TableStudentScores id={id} title="Classroom Scores" />
    </>
  );
};

export default StudentScores;
