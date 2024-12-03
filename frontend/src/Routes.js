import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import Account from "./components/Account";
import AboutUs from "./components/AboutUs";
// import Dashboard from "./components/Dashboard";
// import SummernoteComponent from "./components/Summernote";
// import SummernoteComponentPut from "./components/SummernotePutTeste";


 const AppRoutes = () => {
     return(
        <Router>
                <Routes>
                    <Route path="/" element={<Navigation/>}></Route>
                    <Route path="/aboutus" element={<AboutUs/>}></Route>
                </Routes>
        </Router>
     )
  }
 
  export default AppRoutes;