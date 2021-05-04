import { getIndex } from '../../api/queries';

async function getIndexTable(tableName) {
  const response = await getIndex(tableName);
  return {
    tableName,
    data: response,
  };
}

async function requestTable(request) {
  const sections = request.split('/');
  switch (sections[0]) {
    case 'classrooms':
    case 'students':
    case 'presentation_areas':
    case 'presentation_subareas': return getIndexTable(request);
    default: return null;
  }
}

export default requestTable;
