import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Table from '../../containers/Table/Table';

const Classrooms = ({ setErrors }) => {
  const { id } = useParams();

  return (
    <>
      <Table
        tableName="classrooms"
        id={id}
        handleError={(messages) => setErrors(messages)}
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

Classrooms.propTypes = {
  setErrors: PropTypes.func.isRequired,
};

export default Classrooms;
