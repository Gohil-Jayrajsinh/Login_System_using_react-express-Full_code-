import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sign_up from './Signup';
import Login from './Login';
import { createBrowserRouter, RouterProvider, Routes, Link } from 'react-router-dom';

const router = createBrowserRouter([
{
  path: "/",
  element: <App />
},

{
  path: "/Signup",
  element: <Sign_up />
},

{
  path: "/Login",
  element: <Login />
},

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
