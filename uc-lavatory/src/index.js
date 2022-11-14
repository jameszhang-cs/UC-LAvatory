import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Popup></Popup>
  </React.StrictMode>
);