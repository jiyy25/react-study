import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Bootnav from './Bootnav';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Bootnav></Bootnav>
    <App />
  </BrowserRouter>
);

