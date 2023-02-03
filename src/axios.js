import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://react.master-ua.com',
// });

const instance = axios.create({
  baseURL: 'http://localhost:8000',
});

export const apiurl = 'http://localhost:8000';
// http://react.master-ua.com
// http://localhost:8000

export default instance;
