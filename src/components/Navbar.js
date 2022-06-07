import React from "react";
import reactLogo from "../original/logo.svg" //this is a way to use images in react
import '../styles/navbar.css' //importing styles for this specific component
import { NotificationContext } from "..";

import { BiBell, BiBellOff, BiNavigation, BiNotification, BiNotificationOff, BiSearch, BiSearchAlt, BiSearchAlt2 } from "react-icons/bi/index";
// import {}from 'react-icons/fs'

// This is a function Component 
export default function Navbar(props){
    const [modal, setModal] = React.useState(false);

    const {notificationCount} = React.useContext(NotificationContext)

    // console.log(notificationCount)
    return(
        <div className="navbar">

            <div className="navbar-logo">
            <img src={reactLogo} alt="react-logo" />
            <h2>ReactFacts</h2>
            <div className="notification__wrapper">
                    <BiBell className="icon"/>
                    <div className="notification">
                        {notificationCount}
                    </div>
                    </div>
            </div>
            <ul className="navlist">
                <li>
                    <div className="search__wrapper">
                        <BiSearch className="BiSearch icon"/>
                        <input type="text" placeholder="search here"/>
                    </div>
                    </li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Docs</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">Blog</a></li>
            </ul>

            {/* <h4 className="navbar-course">
            React Course - Project 1
            </h4> */}

            <div className="hamburger" onClick={() => setModal((prev)=> !prev)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            {modal ?
            <div className="mobileMenu__container">
                <ul className="mobileMenu__list">
                    <li className="mobileMenu__list-item"><a href="#">Home</a></li>
                    <li className="mobileMenu__list-item"><a href="#">Docs</a></li>
                    <li className="mobileMenu__list-item"><a href="#">API</a></li>
                    <li className="mobileMenu__list-item"><a href="#">Blog</a></li>
                </ul>
            </div> : null
            }
        </div>
    )
    
}