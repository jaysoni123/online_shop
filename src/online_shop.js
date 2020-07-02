import React from 'react'
import "./bootstrap.min.css"
import Header from "./header"
import Dashboard from "./dashboard"

const OnlineShop = () => {
    return(
        <React.Fragment>
            <Header />
            <Dashboard />
        </React.Fragment>
    );
}

export default OnlineShop;