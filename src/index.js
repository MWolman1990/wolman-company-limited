import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Viewport from './Viewport'
import About from './About'
import Services from './Services.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Viewport/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'services',
        element: <Services/>
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

