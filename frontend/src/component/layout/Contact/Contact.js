import React from "react";
import "./Contact.css";
import logo from '../../../Images/logo.png'
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Contact = () => {
    return (
        <div className="contactContainer">
            <div >
                <div style={{margin: "5vh auto", width: "fit-content"}}>
                    <Link to="/" style={{padding: "1vw"}}>
                        <img src={logo} alt="Art Vista" className="contactLogo"/>
                    </Link>
                </div>
            </div>
            <div style={{padding: "0 4vw"}}>
                <div className="contactText">
                Welcome to our website! We at Art Vista aims to showcase hidden creativity of people to the world. We have seen so many people who have the talent to build some creative things but due to unavailable resources, they are not able to use it properly which leads to the wastage of talent. Hence, we introduced this platform which allows you to sell your creative items at your decided prices and become a successful entrepreneur. This platform is built mainly for village people and women who are mainly not given opportunities to showcase their talent and creativity to everyone due to some barriers. Through our platform, one has the freedom to sell all kinds of creative products like flower pots, wall hangings, handmade embroidery, storage items, handicrafts, paintings, jewellery, and much more. Everyone can order the items from part of the country and buy the products at cheaper rates as compared to urban market. It allows the buyers to buy the product directly from the manufacturer and from no middlemen. Our website aims to bring your talent on stage and we also nominate the best product of the month in our featured product section. So, if you also want to join us, mail on and join this platform to grow more!

                </div>
                <a className="mailBtn" href="mailto:vishakhaaggarwal251@gmail.com">
                    <Button>Contact: <br />
                        vishakhaaggarwal251@gmail.com</Button>
                </a>
            </div>
        </div>
    );
};

export default Contact;