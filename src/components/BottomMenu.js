import React from "react";
import { FixedBottomSection, FlexWithSpaceBetween, Icon } from "../styles/Sections";
// import {GrLocation} from 'react-icons/gr'
import {BsChatRight, BsPeople, BsPlay} from 'react-icons/bs'
import {HiOutlineLocationMarker, HiOutlineCamera} from 'react-icons/hi'
import {useSwiper} from "swiper/react";

export default function BottomMenu() {
    const swiper = useSwiper();

console.log(swiper)
    return <FixedBottomSection>
        <FlexWithSpaceBetween>

            <Icon size="1.4" onClick={()=> swiper.slideTo(0)}>
            <HiOutlineLocationMarker className="icon"/>
            </Icon>

            <Icon size="1.4" onClick={()=> swiper.slideTo(1)}>
            <BsChatRight className="icon"/>
            </Icon>

            <Icon size="1.4" onClick={()=> swiper.slideTo(2)}>
            <HiOutlineCamera className="icon"/>
            </Icon>

            <Icon size="1.4"onClick={()=> swiper.slideTo(3)}>
            <BsPeople className="icon"/>
            </Icon>

            <Icon size="1.4" onClick={()=> swiper.slideTo(4)}>
            <BsPlay className="icon"/>
            </Icon>

        </FlexWithSpaceBetween>
    </FixedBottomSection>;
}
