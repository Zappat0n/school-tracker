import { getIndex } from '../../api/queries';
import { addTable } from '../../slices/userSlice';

async function getClassroomTable(tableName, token) {
  const response = await getIndex(token, tableName);
  return {
    tableName: 'classrooms',
    function: addTable,
    data: response,
  };
}

async function requestTable(tableName, token) {
  switch (tableName) {
    case 'classrooms': return getClassroomTable(tableName, token);
    default: return null;
  }
}

export default requestTable;
