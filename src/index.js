import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NoFound from './components/NoFound';
import BlankPage from './components/BlankPage';

import reportWebVitals from './reportWebVitals';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/404" element={<NoFound/>}></Route>
        <Route path="/blank-page" element={<BlankPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
