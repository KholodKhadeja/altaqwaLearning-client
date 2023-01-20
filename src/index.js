import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

/* config axios */
axios.defaults.baseURL = `https://server-masjed-eltaqwa.onrender.com/`;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    /*
        the token exists in local storage,
        the user logged in.
        if the token exists then we will add it to header of the request
    */
    config.headers["x-auth-token"] = token;
  }
  return config;
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
