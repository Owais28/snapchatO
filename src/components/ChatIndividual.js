import React from "react";
import { Icon, SectionWithPadding } from "../styles/Sections";
import avatar from '../images/snapAvatar.jpg'
import {HiOutlineCamera} from 'react-icons/hi'

export default function ChatIndividual(props) {
    return <SectionWithPadding
    on='lrtb' 
    onRight="9"
    onLeft="9"
    onTop="6"
    onBottom="6" className="chat__border"
    >
        <div className="chat__wrapper">
            <div className="mr-1 img-icon">
            {/* <BsFillPersonFill className="icons"/> */}
            <img src={avatar} alt="" />
            </div>

            <div className="chat__data">
            <div className="chat__body">
                <div className="chat__body-title">
                {props.person}
                </div>
                <div className="chat__body-messageStatues">
                    {props.status}P
                </div>
            </div>

            <div className="chat__sendSnapIcon">
                <Icon>
                    <HiOutlineCamera className="chat__snap"/>
                </Icon>
            </div>
            </div>

        </div>

        </SectionWithPadding>;
}
