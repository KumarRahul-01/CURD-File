import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Components/Layouts/Layout';
import UserResgister from './Components/Pages/UserResgister';
import UserList from './Components/Pages/UserList';
import EditUser from './Components/Pages/EditUser';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"register",
        element:<UserResgister/>,
      },
      {
        path:"list",
        element:<UserList/>
      },
      {
        path:"edit/:id",
        element:<EditUser/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
