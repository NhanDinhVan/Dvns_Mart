import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/user/homePage';
import { BrowserRouter } from 'react-router-dom';
import ProfilePage from './pages/user/profilePage';
import RouterCustom from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouterCustom />
  </BrowserRouter>

);
