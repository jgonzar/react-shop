import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import RecoveryPwd from "../pages/RecoveryPwd";
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
                    <Route exact path="/send-email" element ={<SendEmail />} />
                    <Route exact path="/new-password" element ={<NewPassword />} />
                    <Route exact path="/account" element ={<MyAccount />} />
                    <Route exact path="/signup" element ={<CreateAccount />} />
                    <Route exact path="/checkout" element ={<Checkout />} />
                    <Route exact path="/orders" element ={<Orders />} />
                    <Route path ="*" element ={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;