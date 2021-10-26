import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <NavLink to="/" exact={true}>Product List</NavLink>
            <NavLink to="/admin">Admin Panel</NavLink>
        </div>
    )
}

export default NavBar