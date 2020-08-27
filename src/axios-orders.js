import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-app-dec31.firebaseio.com/',
});

export default instance;
