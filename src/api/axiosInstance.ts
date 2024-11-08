import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:6500/api/v1/admin',
  withCredentials:true
});

export const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};


