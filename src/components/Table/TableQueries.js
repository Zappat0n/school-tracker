import { getClassrooms } from '../../api/queries';
import { addTable } from '../../slices/userSlice';

async function getClassroomTable(tableName, token) {
  const response = await getClassrooms(token);
  return {
    tableName: 'Classrooms',
    function: addTable,
    data: response,
  };
}

async function requestTable(tableName, token) {
  switch (tableName) {
    case 'Classrooms': return getClassroomTable(tableName, token);
    default: return null;
  }
}

export default requestTable;
