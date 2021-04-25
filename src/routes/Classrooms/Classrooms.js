import { useParams } from 'react-router-dom';
import Table from '../../containers/Table/Table';

const Classrooms = () => {
  const { id } = useParams();

  return (
    <>
      <Table
        tableName="classrooms"
        id={id}
        title={id ? 'Students' : 'Classrooms'}
        commands={
        [
          {
            className: 'fas fa-list',
            route: '/classrooms/:id',
          },
          {
            className: 'fas fa-th',
            route: '/classrooms/:id/scores',
          },
        ]
        }
      />
    </>
  );
};
export default Classrooms;
