import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Account from "./components/Account";
import AboutUs from "./components/AboutUs";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
// import UpdateDoc from "./components/UpdateDoc";

 const AppRoutes = () => {
     return(
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/cadastrar" element={<SignUp />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/sobre_nos" element={<AboutUs />}></Route>
                    <Route path="/perfil" element={<Account />}></Route>
                    <Route path="/meus_documentos" element={<Dashboard />}></Route>
                    {/* <Route path="/editar_documento/:id" element={<UpdateDoc />}></Route> */}
                </Routes>
            </Layout>
        </Router>
     )
  }
 
  export default AppRoutes;