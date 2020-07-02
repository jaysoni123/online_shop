import React from 'react'

const Header = () => {

    const headerColor = {
        backgroundColor: "pink"
    }
    
    return(
        <div className="container-fluid text-center text-primary p-2" style={headerColor}>  
            <h1 className="font-weight-bold">OnlineShop</h1>
        </div>
    );
}

export default Header;