import React from "react";
import { FixedBottomSection, FlexWithSpaceBetween, Icon } from "../styles/Sections";
import {GrLocation} from 'react-icons/gr'
import {BsChatRight} from 'react-icons/bs'

export default function BottomMenu() {
    return <FixedBottomSection>
        <FlexWithSpaceBetween>
            <Icon size="1.3">
            <GrLocation className="icon"/>
            </Icon>
            <Icon size="1.3">
            <BsChatRight className="icon"/>
            </Icon>
        </FlexWithSpaceBetween>
    </FixedBottomSection>;
}
