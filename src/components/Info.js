import React from "react";
export default function Info(props) {
    return (<div>
        <div className="user-img">
        <img  src={props.img} alt="use" />
        </div>
        {console.log(props)}
        <div className="user-details">
            <h2 className="user-name">{props.userName}</h2>
            <h3 className="user-occupation">{props.userOccupation}</h3>
            <a href={props.userWeb} className="user-website">{props.userWeb}</a>
            <div className="connect-buttons">
                <a href={props.emailAddress} className="flex">📧Email</a>
                <a href={props.linkedinProfile} className="btn-linkedin">👨🏻LinkedIn</a>
            </div>
        </div>
        </div>
    );
}
