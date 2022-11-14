
// !Component way

import React from "react";

//!react router 6 onwards
import {
  BrowserRouter as Router,Routes,
  Route
} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/others/Home";
import PageNotFound from "./components/others/PageNotFound"
import Navbar from "./components/header/Navbar"
import DashBoard from "./components/Dashboard/DashBoard";
import MyAccount from './components/Dashboard/MyAccount';
import UseProfile from "./components/Dashboard/UseProfile";
import Users from "./components/auth/Users"


const App = () => {
  return (
    <div>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/:name" element={<Users/>}></Route>


          <Route path="/dashboard" element={<DashBoard />}>
            <Route index element={<UseProfile/>}/>
            <Route path="my-account" element={<MyAccount />} />
            <Route path="profile" element={<UseProfile/>}/>
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </Router>
      
    </div>
  );
};

export default App;


//!Object literal way

// import React from 'react'
// import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './components/header/Navbar';
// import BaseRoute from './routes/BaseRoute';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <BaseRoute/>
//     </Router>
//   )
// }

// export default App
