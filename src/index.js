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
import getBlog from './loaders/getBlog.js'
import Article from './Article.js'
import Projects from './Projects.js'
import ContactInfo from './ContactInfo.js'

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
      },
      {
        path: 'blog/:id',
        element: <Article/>,
        loader: async ({ params }) => {
          return getBlog(params.id)
        }
      },
      {
        path: 'projects',
        element: <Projects/>
      },
      {
        path: 'contact',
        element: <ContactInfo/>
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

