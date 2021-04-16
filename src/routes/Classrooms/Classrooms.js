import { useParams } from 'react-router-dom';
import Table from '../../components/Table/Table';

const Classrooms = () => {
  const { id } = useParams();

  return (
    <>
      <Table tableName="classrooms" id={id} title={id ? 'Students' : 'Classrooms'} />
    </>
  );
};
export default Classrooms;