import { getIndex } from '../../api/queries';

async function getIndexTable(tableName, token) {
  const response = await getIndex(token, tableName);
  return {
    tableName,
    data: response,
  };
}

async function requestTable(tableName, token) {
  switch (tableName) {
    case 'classrooms': case 'students': return getIndexTable(tableName, token);
    default: return null;
  }
}

export default requestTable;
