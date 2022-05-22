import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import App from './App';

import authToken from './keys/api_key';

axios.defaults.baseURL = 'https://petland-back-end.herokuapp.com/';
axios.defaults.headers.common.Authorization = authToken;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
