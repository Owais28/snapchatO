import React from "react";
import { NavbarSection, IconWithBackground } from "../styles/Sections";
import {IoSearch} from 'react-icons/io5'
import {BsFillPersonFill, BsFillPersonPlusFill} from 'react-icons/bs'
import {FiMoreHorizontal} from 'react-icons/fi'

import '../index.css'

export default function Navbar() {
    return <NavbarSection>

        <div className="navbar__userAvatar">
            <IconWithBackground className="mr-1">
                <BsFillPersonFill className="icons"/>
            </IconWithBackground>
            <IconWithBackground>
                <IoSearch className="icons"/>
            </IconWithBackground>
        </div>

        <div className="navbar__title">
            sdsad
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
