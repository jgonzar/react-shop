import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPwd from "../containers/RecoveryPwd";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import '../styles/styles.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element ={<Home />} />
                    <Route exact path="/login" element ={<Login />} />
                    <Route exact path="/recovery-password" element ={<RecoveryPwd />} />        
                    <Route element ={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;