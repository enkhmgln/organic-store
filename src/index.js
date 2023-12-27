import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routers } from 'react-router-dom';
import './index.css';
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Routers>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Routers>  
);
