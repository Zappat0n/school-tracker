import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Table from '../../components/Table/Table';

const Classrooms = ({ setErrors, setTitle }) => {
  const { id } = useParams();
  useEffect(() => setTitle(id ? 'Students' : 'Classrooms'), []);

  return (
    <>
      <Table
        tableName="classrooms"
        id={id}
        handleError={(messages) => setErrors(messages)}
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
  setTitle: PropTypes.func.isRequired,
};

export default Classrooms;
