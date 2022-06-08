import React from "react";
import ReactDOM  from "react-dom/client";
import Navbar from "./components/Navbar";
import BottomMenu from "./components/BottomMenu";
import './index.css'
import './styles/global.css'
import './styles/navbar.css'
import { MobileSection, SectionWithPadding } from "./styles/Sections";
import ChatIndividual from "./components/ChatIndividual";
const msgs = [
    {
        person:"M Imamuddin",
        originalStatus : "received-story",
        status : 'received',
        time : "8h"
    },
    {
        person:"Chetan Verma",
        originalStatus : "viewed-msg",
        status : 'received',
        time : "2h"
    },
    {
        person:"Hassan",
        originalStatus : "sent-story",
        status : 'Delivered',
        time : "3min"
    },
    {
        person:"Faisal CSE",
        originalStatus : "opened-story",
        status : 'Opened',
        time : "20s"
    },
    {
        person:"Irfan Bro",
        originalStatus : "received-msg",
        status : 'received',
        time : "50min"
    },
    {
        person:"Saquid Bro",
        originalStatus : "viewed-story",
        status : 'received',
        time : "2h"
    },
    {
        person:"Zuha",
        originalStatus : "sent-snap",
        status : 'Delivered',
        time : "10min"
    },
    {
        person:"Faisal CSE",
        originalStatus : "opened-story",
        status : 'Opened',
        time : "20s"
    },
    {
        person:"Hassan",
        originalStatus : "sent-story",
        status : 'Delivered',
        time : "3min"
    },
    {
        person:"Zuha",
        originalStatus : "sent-snap",
        status : 'Delivered',
        time : "10min"
    },
    {
        person:"Golu",
        originalStatus : "opened-snap",
        status : 'Opened',
        time : "20s"
    },
    {
        person:"Faisal CSE",
        originalStatus : "opened-story",
        status : 'Opened',
        time : "20s"
    },{
        person:"Golu",
        originalStatus : "opened-snap",
        status : 'Opened',
        time : "20s"
    },
    {
        person:"M Imamuddin",
        originalStatus : "received-story",
        status : 'received',
        time : "8h"
    },
    {
        person:"Chetan Verma",
        originalStatus : "viewed-msg",
        status : 'received',
        time : "2h"
    },
    {
        person:"Hassan",
        originalStatus : "sent-story",
        status : 'Delivered',
        time : "3min"
    },
    {
        person:"Faisal CSE",
        originalStatus : "opened-story",
        status : 'Opened',
        time : "20s"
    },
    {
        person:"Irfan Bro",
        originalStatus : "received-msg",
        status : 'received',
        time : "50min"
    },
    {
        person:"Saquid Bro",
        originalStatus : "viewed-story",
        status : 'received',
        time : "2h"
    },
    {
        person:"Zuha",
        originalStatus : "sent-snap",
        status : 'Delivered',
        time : "10min"
    },
    {
        person:"Faisal CSE",
        originalStatus : "opened-story",
        status : 'Opened',
        time : "20s"
    },
    {
        person:"Hassan",
        originalStatus : "sent-story",
        status : 'Delivered',
        time : "3min"
    },
    {
        person:"Zuha",
        originalStatus : "sent-snap",
        status : 'Delivered',
        time : "10min"
    },
    {
        person:"Golu",
        originalStatus : "opened-snap",
        status : 'Opened',
        time : "20s"
    },
    {
        person:"Faisal CSE",
        originalStatus : "opened-story",
        status : 'Opened',
        time : "20s"
    },{
        person:"Golu",
        originalStatus : "opened-snap",
        status : 'Opened',
        time : "20s"
    },
    {
        person:"M Imamuddin",
        originalStatus : "received-story",
        status : 'received',
        time : "8h"
    },
    {
        person:"Chetan Verma",
        originalStatus : "viewed-msg",
        status : 'received',
        time : "2h"
    },
    {
        person:"Hassan",
        originalStatus : "sent-story",
        status : 'Delivered',
        time : "3min"
    },
    {
        person:"Faisal CSE",
        originalStatus : "opened-story",
        status : 'Opened',
        time : "20s"
    },
    {
        person:"Irfan Bro",
        originalStatus : "received-msg",
        status : 'received',
        time : "50min"
    },
    {
        person:"Saquid Bro",
        originalStatus : "viewed-story",
        status : 'received',
        time : "2h"
    },
    {
        person:"Zuha",
        originalStatus : "sent-snap",
        status : 'Delivered',
        time : "10min"
    },
    {
        person:"Faisal CSE",
        originalStatus : "opened-story",
        status : 'Opened',
        time : "20s"
    },
    {
        person:"Hassan",
        originalStatus : "sent-story",
        status : 'Delivered',
        time : "3min"
    },
    {
        person:"Zuha",
        originalStatus : "sent-snap",
        status : 'Delivered',
        time : "10min"
    },
    {
        person:"Golu",
        originalStatus : "opened-snap",
        status : 'Opened',
        time : "20s"
    },
    {
        person:"Faisal CSE",
        originalStatus : "opened-story",
        status : 'Opened',
        time : "20s"
    },{
        person:"Golu",
        originalStatus : "opened-snap",
        status : 'Opened',
        time : "20s"
    },
    {
        person:"Faisal CSE",
        originalStatus : "opened-story",
        status : 'Opened',
        time : "20s"
    },
    {
        person:"Hassan",
        originalStatus : "sent-story",
        status : 'Delivered',
        time : "3min"
    },
    {
        person:"Zuha",
        originalStatus : "sent-snap",
        status : 'Delivered',
        time : "10min"
    },
    {
        person:"Zuha",
        originalStatus : "sent-snap",
        status : 'Delivered',
        time : "10min"
    },
    {
        person:"Faisal CSE",
        originalStatus : "opened-story",
        status : 'Opened',
        time : "20s"
    },
    {
        person:"Hassan",
        originalStatus : "sent-story",
        status : 'Delivered',
        time : "3min"
    },
    {
        person:"Zuha",
        originalStatus : "sent-snap",
        status : 'Delivered',
        time : "10min"
    },
    {
        person:"Golu",
        originalStatus : "opened-snap",
        status : 'Opened',
        time : "20s"
    },
]

export default function App() {
    return <div className="app">
    <MobileSection>
        <Navbar/>
        {msgs.map(
            (msg) => <ChatIndividual 
            person={msg.person} 
            originalStatus={msg.originalStatus}
            status={msg.status}
            time={msg.time}
            />
        )}
        {/* <ChatIndividual person="M Imamuddin" originalStatus="received-story" status="received" time="8h"/>
        <ChatIndividual person="Chetan" originalStatus="received-msg" status="received"/>
        <ChatIndividual person="Chetan" originalStatus="viewed-msg" status="Viewed"/>
        <ChatIndividual person="Chetan" originalStatus="received-msg" status="received"/>
        <ChatIndividual person="Chetan" originalStatus="viewed-story" status="Viewed"/>
        <ChatIndividual person="Chetan" originalStatus="sent-msg" status="Sent"/>
        <ChatIndividual person="Chetan" originalStatus="sent-story" status="Sent"/>
        <ChatIndividual person="Chetan" originalStatus="received-msg" status="received"/>
        <ChatIndividual person="Chetan" originalStatus="received-story" status="received"/>
        <ChatIndividual person="Chetan" originalStatus="opened-msg" status="Opened"/>
        <ChatIndividual person="Chetan" originalStatus="opened-story" status="Opened"/>
        <ChatIndividual person="Chetan" originalStatus="received-msg" status="received"/>
        <ChatIndividual/>
        <ChatIndividual/>
        <ChatIndividual/>
        <ChatIndividual/>
        <ChatIndividual/>
        <ChatIndividual/>
        <ChatIndividual/> */}

        <BottomMenu/>
    </MobileSection>
    </div>
}






const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
    )