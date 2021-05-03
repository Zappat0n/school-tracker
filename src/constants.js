const API_SERVER = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_SERVER : 'http://127.0.0.1:3000';

export default API_SERVER;
