// import { configure } from '@testing-library/react'
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const api = axios.create({
  baseURL: 'http://localhost:4000',
});
