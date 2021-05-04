const storageManager = () => {
  const load = () => {
    const storage = localStorage.getItem('token');

    try {
      return storage ? JSON.parse(storage) : [];
    } catch (ex) {
      return [];
    }
  };

  const save = (token) => {
    localStorage.token = JSON.stringify(token);
  };

  return { load, save };
};

const storage = storageManager();

export { storage as default };
