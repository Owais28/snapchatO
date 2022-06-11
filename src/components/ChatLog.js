import React from "react";
// import { IoMdHeartEmpty } from "react-icons/io";
import { SectionWithPadding } from "../styles/Sections";
import {RiChatOffFill} from 'react-icons/ri'
import ChatIndividual from "./ChatIndividual";


export default function ChatLog({
    msgs
})
{
    let allMsgs;
    if(msgs.length !== 0){
        allMsgs = msgs.map(
            (msg, index) => < ChatIndividual key={
                index
            }
                person={
                    msg.person
                }
                originalStatus={
                    msg.originalStatus
                }
                status={
                    msg.status
                }
                time={
                    msg.time
                }
            />)
    } else allMsgs = [<SectionWithPadding className="not__found-container" 
        on="lrtb"
        onLeft="10"
        onRight="10"
        onTop="10"
        onBottom="10">
        <RiChatOffFill className="not__found-icon"/> Not Found
    </SectionWithPadding>]
    
    return <div className="chat__container"> {
        allMsgs
            }
    </div>;
}