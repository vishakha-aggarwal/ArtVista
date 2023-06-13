import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

const Sidebar = (props) => {

    const [open, setOpen] = props.open;
    return (
        <div className="navSidebar" style={{display: open === false? "none" : "block" }}>
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/products">
                <div>Products</div>
            </Link>
            <Link to="/search">
                <div>Search</div>
            </Link>
            <Link to="/cart">
                <div>Cart</div>
            </Link>
            <Link to="/login">
                <div>Login</div>
            </Link>
            <Link to="/contact">
                <div>Contact</div>
            </Link>
        </div>
    );
};

export default Sidebar;