import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.css';
import App from './App';
import ReactModal from 'react-modal';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/Home" element = { <App/> } />
      <Route path = "*" element = { <Navigate to = "Home" replace /> } />
    </Routes>
  </BrowserRouter>
);
  
  ReactModal.setAppElement('#root');