import { useParams } from 'react-router-dom';
import Table from '../../containers/Table/Table';

const PresentationSubareas = () => {
  const { id } = useParams();
  return (
    <>
      <Table tableName="presentation_subareas" id={id} title={id ? 'Presentations' : 'Presentation Subareas'} />
    </>
  );
};
export default PresentationSubareas;
