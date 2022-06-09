import React from "react";
import ReactDOM  from "react-dom/client";
import Navbar from "./components/Navbar";
import BottomMenu from "./components/BottomMenu";
import './index.css'
import './styles/global.css'
import './styles/navbar.css'
import { MobileSection } from "./styles/Sections";
import ChatIndividual from "./components/ChatIndividual";
// import UseSwiper from './components/SlideNextButton'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import { useSwiper } from "swiper/react";
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
            const fullscreenModal = document.querySelector('.fullscreenModalbody')
            const fullscreenbtn = document.querySelector('#fullscreenBtn');
            fullscreenbtn.onclick = () => {
                document.documentElement.requestFullscreen();
                fullscreenModal.remove();
            }



        }
    ,[])
    

    
    return <div className="app">
        <div className="fullscreenModalbody">
            <div className="content">
            <div className="qtn">
                Please use app in fullscreen.
            </div>
            <button id="fullscreenBtn">Yes, take me there 😊</button>
            </div>
        </div>
    <MobileSection className="bg-black">
        <Navbar/>
        <Swiper
      spaceBetween={13}
      slidesPerView={1}
      //   onSlideChange={() => console.log('slide change')}
      //   onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide virtualIndex={1} className="snap-1 map">
        Snap Map 🗺️
    </SwiperSlide>
    <SwiperSlide virtualIndex={2}>
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