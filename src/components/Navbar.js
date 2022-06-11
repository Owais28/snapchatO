import React from "react";
import { NavbarSection, IconWithBackground } from "../styles/Sections";
// import {IoSearch} from 'react-icons/io5'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import {FiMoreHorizontal} from 'react-icons/fi'
import avatar from '../images/snapAvatar.jpg'
import '../index.css'
import SearhIcon from "./SearhIcon";

export default function Navbar(props) {
    return <NavbarSection>

        <div className="navbar__userAvatar">

            <div className="mr-1 img-icon">
                {/* <BsFillPersonFill className="icons"/> */}
                <img src={avatar} alt="" />
            </div>
            {/* <IconWithBackground>
                <IoSearch className="icons"/>
                
            </IconWithBackground> */}
            {/* /newly added : Testing purpose*/}
            <SearhIcon onSearch={props.onSearch}/>
        </div>

        <div className="navbar__title">
            Chat
        </div>

        <div className="navbar__more">
        <IconWithBackground className="mr-1">
                <BsFillPersonPlusFill className="icons"/>
            </IconWithBackground>
            <IconWithBackground>
                <FiMoreHorizontal className="icons"/>
            </IconWithBackground>
        </div>

        </NavbarSection>;
}
