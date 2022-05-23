import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import App from './App';

import { serverToken, serverURL } from './keys/server';

axios.defaults.baseURL = serverURL;
axios.defaults.headers.common.authorization = serverToken;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
