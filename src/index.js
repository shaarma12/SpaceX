import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Rockets from './Components/Rockets';
const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/rockets",
    element: <Rockets />
  }]
}]);
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

