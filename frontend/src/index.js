import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Account from "./components/Account";
import AboutUs from "./components/AboutUs";
import Dashboard from "./components/Dashboard";
import SummernoteComponent from "./components/Summernote";
import SummernoteComponentPut from "./components/SummernotePut";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navigation />
    <Dashboard />
    <Login />
    <SignUp />
    <Account />
    <AboutUs />
    <Dashboard />
    <SummernoteComponent />
    <SummernoteComponentPut />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
