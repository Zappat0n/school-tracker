import PropTypes from 'prop-types';
import Table from '../../containers/Table/Table';

const Students = ({ setErrors }) => (
  <>
    <Table
      tableName="students"
      title="Students"
      handleError={(messages) => setErrors(messages)}
    />
  </>
);

Students.propTypes = {
  setErrors: PropTypes.func.isRequired,
};

export default Students;
