import axios from 'axios';

export const instanse = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000
})
