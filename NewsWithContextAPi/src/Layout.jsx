import React, { useState } from "react";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import { NewsProvider } from "./Context/NewsContext";

function Layout() {
    return (
        <>
            <Header />
            <NewsProvider>
                <Outlet />
            </NewsProvider>
        </>
    )
}

export default Layout;