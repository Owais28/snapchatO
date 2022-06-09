import React from "react";
import {SectionWithPadding } from "../styles/Sections";
import avatar from '../images/snapAvatar.jpg'
import {HiOutlineCamera} from 'react-icons/hi'
// import {FaRegSquare} from 'react-icons/fa'
import {BsChatRight} from 'react-icons/bs'
import {AiOutlineSend} from 'react-icons/ai'
import {IoSendOutline} from 'react-icons/io5'
import {IoMdSquareOutline, IoMdSquare} from "react-icons/io";



export default function ChatIndividual(props) {

    let statusIcon = <BsChatRight/>;
    if(props.originalStatus === 'viewed-story'){    
        statusIcon = <IoMdSquareOutline className=" status-icon status-snap"/>
    } else if(props.originalStatus === 'viewed-msg'){
        statusIcon = <BsChatRight className="status-icon status-msg"/>
    } else if(props.originalStatus === 'sent-msg'){
        statusIcon = <AiOutlineSend className="status-icon status-msg"/>
    } else if(props.originalStatus === 'sent-story'){
        statusIcon = <AiOutlineSend className=" status-icon status-snap"/>
    } else if(props.originalStatus === 'opened-story'){
        statusIcon = <IoSendOutline className=" status-icon status-snap"/>
    } else if(props.originalStatus === 'opened-msg'){
        statusIcon = <IoSendOutline className=" status-icon status-msg"/>
    } else if(props.originalStatus === 'received-msg'){
        statusIcon = <IoMdSquare className="status-icon status-msg"/>
    } else if(props.originalStatus === 'received-story'){
        statusIcon = <BsChatRight className="status-icon status-snap"/>
    }

    return <SectionWithPadding
    on='lrtb' 
    onRight="14"
    onLeft="14"
    onTop="6"
    onBottom="6" className="chat__border"
    >
        <div className="chat__wrapper">
            <div className="img-icon">
            {/* <BsFillPersonFill className="icons"/> */}
            <img src={avatar} alt="" />
            </div>

            <div className="chat__data">
            <div className="ml-1 chat__body">
                <div className="chat__body-title">
                {props.person}
                </div>
                <div className="chat__body-messageStatus">
                    {statusIcon}
                    <div className="status-message">
                    {props.status} <span>&bull; {props.time}</span>
                    </div>
                </div>
            </div>

            <div className="chat__sendSnapIcon">
                <div className="ICON">
                    <HiOutlineCamera className="chat__snap"/>
                </div>
            </div>
            </div>

        </div>

        </SectionWithPadding>;
}
