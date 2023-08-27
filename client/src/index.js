import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.css';
import App from './App';
import ReactModal from 'react-modal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
  );
  
  ReactModal.setAppElement('#root');