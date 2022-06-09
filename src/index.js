import React from "react";
import ReactDOM  from "react-dom/client";
import Navbar from "./components/Navbar";
import BottomMenu from "./components/BottomMenu";
import './index.css'
import './styles/global.css'
import './styles/navbar.css'
import { MobileSection, SectionWithPadding } from "./styles/Sections";
import ChatIndividual from "./components/ChatIndividual";
import UseSwiper from './components/SlideNextButton'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSwiper } from "swiper/react";
import { useEffect } from "react";

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
        originalStatus : "sent-story",
        status : 'Delivered',
        time : "10min"
    },
    {
        person:"Irfan Bro",
        originalStatus : "received-msg",
        status : 'received',
        time : "50min"
    },
    {
        person:"Hassan",
        originalStatus : "sent-story",
        status : 'Delivered',
        time : "3min"
    },
    {
        person:"Irfan Bro",
        originalStatus : "received-msg",
        status : 'received',
        time : "50min"
    },
    {
        person:"Golu",
        originalStatus : "opened-story",
        status : 'Opened',
        time : "20s"
    },
    {
        person:"Irfan Bro",
        originalStatus : "received-msg",
        status : 'received',
        time : "50min"
    },{
        person:"Golu",
        originalStatus : "opened-story",
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
        originalStatus : "sent-story",
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
        person:"Irfan Bro",
        originalStatus : "received-msg",
        status : 'received',
        time : "50min"
    },
    {
        person:"Golu",
        originalStatus : "opened-story",
        status : 'Opened',
        time : "20s"
    },
    {
        person:"Faisal CSE",
        originalStatus : "opened-story",
        status : 'Opened',
        time : "20s"
    },{
        person:"Irfan Bro",
        originalStatus : "received-msg",
        status : 'received',
        time : "50min"
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
        originalStatus : "sent-story",
        status : 'Delivered',
        time : "10min"
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
        originalStatus : "sent-story",
        status : 'Delivered',
        time : "10min"
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
    },{
        person:"Golu",
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
        originalStatus : "sent-story",
        status : 'Delivered',
        time : "10min"
    },
    {
        person:"Saquid Bro",
        originalStatus : "viewed-story",
        status : 'received',
        time : "2h"
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
        person:"Saquid Bro",
        originalStatus : "viewed-story",
        status : 'received',
        time : "2h"
    },
    {
        person:"Irfan Bro",
        originalStatus : "received-msg",
        status : 'received',
        time : "50min"
    },
]

export default function App(){

    useEffect(
        () => {
            const app = document.querySelector('.app');
            app.onclick = () => {
                document.documentElement.requestFullscreen();
            }
        }
    ,[])
    

    const swiper = useSwiper();

    return <div className="app">
    <MobileSection className="bg-black">
        <Navbar/>
        <Swiper
      spaceBetween={13}
      slidesPerView={1}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide virtualIndex={1}>
            <div className="chat__container">

        {msgs.map(
            (msg) => <ChatIndividual 
            person={msg.person} 
            originalStatus={msg.originalStatus}
            status={msg.status}
            time={msg.time}
            />
            )}
            </div>
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

    </SwiperSlide>
    <SwiperSlide virtualIndex={2} className="snap-1">
        Chat 💭
    </SwiperSlide>
    <SwiperSlide virtualIndex={3} className="snap-1">
        Camera 📸
    </SwiperSlide>
    <SwiperSlide virtualIndex={4} className="snap-1">
        Friends 👨🏻
    </SwiperSlide>
    <SwiperSlide virtualIndex={5} className="snap-1">
        Spotlight 📹
    </SwiperSlide>
    {/* <UseSwiper/> */}
    <div className="margin">
        &nbsp;
    </div>
<BottomMenu />
    </Swiper>
    </MobileSection>
    </div>
}






const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
    )