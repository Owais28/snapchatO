import React from "react";
import ReactDOM  from "react-dom/client";
import Navbar from "./components/Navbar";
import BottomMenu from "./components/BottomMenu";
import './index.css'
import './styles/global.css'
import './styles/navbar.css'
import { MobileSection } from "./styles/Sections";
// import ChatIndividual from "./components/ChatIndividual";
// import UseSwiper from './components/SlideNextButton'
import ChatLog from "./components/ChatLog";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// import { useSwiper } from "swiper/react";
import { useEffect } from "react";
// import SearhIcon from "./components/SearhIcon";

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

    const [searchedMsgs,setSearchedMsgs] = React.useState(msgs)

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
    
    const findMsg = (event) => {

        let searchedName = event.target.value
        let reg = new RegExp(`${searchedName.toLowerCase()}`,'g')
        let searchedMsgArray = msgs.filter((msgEvery) => reg.test(msgEvery.person.toLowerCase()))
        // console.log(searchedMsgArray);
        setSearchedMsgs(searchedMsgArray)
        // // console.log(se)
    }
    
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
        {/* <SearhIcon/> */}
        <Navbar onSearch={findMsg}/>
        <Swiper
      spaceBetween={10}
      slidesPerView={1}
      initialSlide={1}
      zoom={false}
      //   onSlideChange={() => console.log('slide change')}
      //   onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide  virtualIndex={1} className="snap-1 map">
        Snap Map 🗺️
    </SwiperSlide>

    <SwiperSlide virtualIndex={2}>
        <ChatLog msgs={searchedMsgs} />
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