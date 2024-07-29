import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import World from './Components/World/World';
import Sports from './Components/Sports/Sports';
import Science from './Components/Science/Science';
import Health from './Components/Health/Health';
import Technology from './Components/Technology/Technology';
import Entertainment from './Components/Entertainment/Entertainment';
import Business from './Components/Business/Business';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <World /> },
      { path: 'world', element: <World /> },
      { path: 'business', element: <Business /> },
      { path: 'entertainment', element: <Entertainment /> },
      { path: 'sports', element: <Sports /> },
      { path: 'technology', element: <Technology /> },
      { path: 'science', element: <Science /> },
      { path: 'health', element: <Health /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
