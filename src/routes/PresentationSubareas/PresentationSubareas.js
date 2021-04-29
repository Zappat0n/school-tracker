import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Table from '../../containers/Table/Table';

const PresentationSubareas = ({ setErrors }) => {
  const { id } = useParams();
  return (
    <>
      <Table
        tableName="presentation_subareas"
        id={id}
        title={id ? 'Presentations' : 'Presentation Subareas'}
        handleError={(messages) => setErrors(messages)}
      />
    </>
  );
};

PresentationSubareas.propTypes = {
  setErrors: PropTypes.func.isRequired,
};

export default PresentationSubareas;
