import React, { useState } from "react";
import ArtVista from "../../../Images/ArtVista.jpg";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaUserAlt, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import SideBar from "./SideBar";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="headerCont">
      <img src={ArtVista} alt="logo" className="logoImg" />
      <div className="context">Art Vista</div>
      <div className="navBar">
        <Link to="/">
          <div className="options">Home</div>
        </Link>
        <Link to="/products">
          <div className="options">Products</div>
        </Link>

        <Link to="/login">
          <FaUserAlt className="options" />
        </Link>
        <Link to="/cart">
          <FaShoppingCart className="options" />
        </Link>
        <Link to="/search">
          <FaSearch className="options" />
        </Link>
        <Link to="/contact">
          <IoMdMail className="options" />
        </Link>
        <FaBars
          className="toggle"
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>
        <SideBar open={[open,setOpen]}/>
    </div>
  );
};

export default Header;
