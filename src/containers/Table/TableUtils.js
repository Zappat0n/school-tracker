import REACT_APP_NAME from '../../constants';

const filterKeys = (array) => array.filter((key) => (!['id', 'created_at', 'updated_at'].includes(key) && !key.endsWith('_id')));

const getCommands = (table) => {
  if (table.startsWith('classrooms')) {
    if (table.includes('/')) {
      return [{ name: 'scores', route: `${REACT_APP_NAME}/students/:id` }];
    }
    return [
      { name: 'list', route: `${REACT_APP_NAME}/classrooms/:id` },
      { name: 'scores', route: `${REACT_APP_NAME}/events/:id` },
    ];
  }

  if (table.startsWith('presentation_areas')) {
    if (table.includes('/')) {
      return [
        { name: 'list', route: `${REACT_APP_NAME}/presentation_subareas/:id` },
      ];
    }
    return [
      { name: 'list', route: `${REACT_APP_NAME}/presentation_areas/:id` },
    ];
  }

  if (table.startsWith('presentation_subareas')) {
    if (table.includes('/')) return [];
    return [
      { name: 'list', route: `${REACT_APP_NAME}/presentation_subareas/:id` },
    ];
  }

  if (table.includes('/')) return [];
  return [
    { name: 'list', route: '' },
  ];
};

export { getCommands, filterKeys };
