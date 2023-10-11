import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Viewport from './Viewport'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'viewport',
        element: <Viewport/>
      }
    ]
  },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

