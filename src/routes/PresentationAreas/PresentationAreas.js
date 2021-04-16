import { useParams } from 'react-router-dom';
import Table from '../../components/Table/Table';

const PresentationAreas = () => {
  const { id } = useParams();
  return (
    <>
      <Table tableName="presentation_areas" id={id} title={id ? 'Presentation Subareas' : 'Presentation Areas'} />
    </>
  );
};
export default PresentationAreas;
