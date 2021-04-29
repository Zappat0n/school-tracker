import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Table from '../../containers/Table/Table';

const PresentationAreas = ({ setErrors }) => {
  const { id } = useParams();
  return (
    <>
      <Table
        tableName="presentation_areas"
        id={id}
        title={id ? 'Presentation Subareas' : 'Presentation Areas'}
        handleError={(messages) => setErrors(messages)}
      />
    </>
  );
};

PresentationAreas.propTypes = {
  setErrors: PropTypes.func.isRequired,
};

export default PresentationAreas;
