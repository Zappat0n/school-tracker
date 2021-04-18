const filterKeys = (array) => array.filter((key) => (!['id', 'created_at', 'updated_at'].includes(key) && !key.endsWith('_id')));

export default filterKeys;
