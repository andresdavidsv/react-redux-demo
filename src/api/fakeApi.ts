import axios from 'axios';

const fakeApi = axios.create({
  baseURL: 'http://localhost:3000',
});

export default fakeApi;
