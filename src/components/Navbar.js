import React from "react";
import reactLogo from "../original/logo.svg" //this is a way to use images in react
import '../styles/navbar.css' //importing styles for this specific component

// This is a function Component 
export default function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-logo">
            <img src={reactLogo} alt="react-logo" />
            <h2>ReactFacts</h2>
            </div>
            <h4 className="navbar-course">
            React Course - Project 1
            </h4>
        </div>
    )
    
}