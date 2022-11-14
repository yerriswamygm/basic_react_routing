import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from "../components/others/Home"
import Login from "../components/auth/Login"
import Register from "../components/auth/Register"
import Dashboard from './../components/Dashboard/DashBoard';
import MyAccount from './../components/Dashboard/MyAccount';
import UseProfile from './../components/Dashboard/UseProfile';
import PageNotFound from "../components/others/PageNotFound"

const BaseRoute = () => {

    //configuration
        let RouteConfig = useRoutes([
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
            children: [
              {
                path: "my-account",
                element: <MyAccount />,
              },
              {
                path: "profile",
                element: <UseProfile />,
              },
            ],
          },
          {
            path: "*",
            element: <PageNotFound />,
          },
        ]);
    return RouteConfig
  
}

export default BaseRoute