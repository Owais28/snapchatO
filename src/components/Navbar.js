import React from "react";
import { NavbarSection, IconWithBackground } from "../styles/Sections";
import {IoSearch} from 'react-icons/io5'
export default function Navbar() {
    return <NavbarSection>

        <div className="navbar__userAvator">
            <IconWithBackground>
                <IoSearch/>
            </IconWithBackground>
        </div>

        <div className="navbar__title">
            sdsad
        </div>

        <div className="navbar__more">
        sdas
        </div>

        </NavbarSection>;
}
