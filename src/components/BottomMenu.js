import React from "react";
import { FixedBottomSection, FlexWithSpaceBetween, Icon } from "../styles/Sections";
import {GrLocation} from 'react-icons/gr'
import {BsChatRight, BsPeople, BsPlay} from 'react-icons/bs'
import {HiOutlineLocationMarker, HiOutlineCamera} from 'react-icons/hi'

export default function BottomMenu() {
    return <FixedBottomSection>
        <FlexWithSpaceBetween>

            <Icon size="1.3">
            <HiOutlineLocationMarker className="icon"/>
            </Icon>

            <Icon size="1.3">
            <BsChatRight className="icon"/>
            </Icon>

            <Icon size="1.3">
            <HiOutlineCamera className="icon"/>
            </Icon>

            <Icon size="1.3">
            <BsPeople className="icon"/>
            </Icon>

            <Icon size="1.3">
            <BsPlay className="icon"/>
            </Icon>

        </FlexWithSpaceBetween>
    </FixedBottomSection>;
}
