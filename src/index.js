import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";

import "./index.css";
import './i18n';
import Home from "./pages/Home/Home";
import Cookie from "./pages/Cookie/Cookie"
import Layout from "./Layout/Layout";
import Projects from "./pages/Projects";
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Layout><Home/></Layout>,
        element: <Layout><Home/></Layout>,
    },
    {
        path: "cookie-policy",
        element: <Layout><Cookie/></Layout>
    },
    {
        path: "/projects",
        errorElement: <Layout><Home/></Layout>,
        element: <Layout><Projects/></Layout>
    }
]);

root.render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
);
