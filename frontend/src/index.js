import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Acount from "./components/Acount";
import Navigation from "./components/Navigation";
import AxiosTeste from "./AxiosTeste";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navigation />
    <Login />
    <SignUp />
    <Acount />
    <AxiosTeste />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
