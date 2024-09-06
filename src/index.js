import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NoFound from './components/NoFound';
import BlankPage from './components/BlankPage';
import Table from './components/Table';
import ChangePassword from './components/ChangePassword';
import Admin from './components/admin/Admin';
import AddAdmin from './components/admin/Add';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Settings from './components/Settings';

import reportWebVitals from './reportWebVitals';

import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Dashboard/>}></Route>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/404" element={<NoFound/>}></Route>
        <Route path="/blank-page" element={<BlankPage/>}></Route>
        <Route path="/table" element={<Table/>}></Route>
        <Route path="/change-password" element={<ChangePassword/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/social-media" element={<SocialMedia/>}></Route>
        <Route path="/settings" element={<Settings/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/admin/add" element={<AddAdmin/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
