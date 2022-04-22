import React from "react";
import Info from './Info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'
import '../styles/card.css';

export default function Card(props) {
    // console.log(props);
    return (<div className="card">
        <Info
            // key={props.id}
            // img={props.img} 
            // userName={props.userName}
            // userOccupation="Front-end Developer"
            // userWeb = {props.userWeb}
            // emailAdress="owaisathar2882@gmail.com"
            // linkedinProfile="linkedin/Owais"
            // {...props}
            {...props}

        />
        <About/>
        <Interests/>
        <Footer/>
        </div>
        );
}
