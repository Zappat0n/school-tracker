import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Table from '../../components/Table/Table';

const PresentationSubareas = ({ setErrors, setTitle }) => {
  const { id } = useParams();
  useEffect(() => setTitle(id ? 'Presentations' : 'Presentation Subareas'), []);

  return (
    <>
      <Table
        tableName="presentation_subareas"
        id={id}
        handleError={(messages) => setErrors(messages)}
      />
    </>
  );
};

PresentationSubareas.propTypes = {
  setErrors: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default PresentationSubareas;
