"use client";
import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ToastContainer } from "react-toastify";


export default function MainLayout({ children }) {

    return (
        <Provider store={store}>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                style={{ zIndex: 999999 }}
                draggable
                theme="dark"
            />
            <Header />
            {children}
            <Footer />
        </Provider>
    );
}