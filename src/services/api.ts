import axios from 'axios';

console.log('api url env', process.env.REACT_APP_API_URL);
console.log('api url env', process.env.REACT_APP_TEST);

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
