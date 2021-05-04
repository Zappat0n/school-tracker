import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Table from '../../components/Table/Table';

const Students = ({ setErrors, setTitle }) => {
  useEffect(() => setTitle('Students'), []);

  return (
    <>
      <Table
        tableName="students"
        handleError={(messages) => setErrors(messages)}
      />
    </>
  );
};

Students.propTypes = {
  setErrors: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default Students;
