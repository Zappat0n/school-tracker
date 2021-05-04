import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Table from '../../components/Table/Table';

const PresentationAreas = ({ setErrors, setTitle }) => {
  const { id } = useParams();
  useEffect(() => setTitle(id ? 'Presentation Subareas' : 'Presentation Areas'), []);

  return (
    <>
      <Table
        tableName="presentation_areas"
        id={id}
        handleError={(messages) => setErrors(messages)}
      />
    </>
  );
};

PresentationAreas.propTypes = {
  setErrors: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default PresentationAreas;
