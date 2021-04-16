import { getIndex } from '../../api/queries';

async function getIndexTable(tableName, token) {
  const response = await getIndex(token, tableName);
  return {
    tableName,
    data: response,
  };
}

async function requestTable(request, token) {
  const sections = request.split('/');
  switch (sections[0]) {
    case 'classrooms': case 'students': case 'presentation_areas': return getIndexTable(request, token);
    default: return null;
  }
}

export default requestTable;
