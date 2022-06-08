import styled from "styled-components";

export const MobileSection = styled.div`

    max-width: 460px;
    background-color:white;

`
export const SectionWithPadding = styled.div`
    width:100%;
    ${(props) => {if(props.on === "lr")
        return 'padding-left : 8px;padding-right:8px' 
    else return `padding-left : ${props.onLeft}px;padding-right :${props.onRight}px ;`}};
` 

export const NavbarSection = styled.div`
    width : 100%;
    background-color:yellow;
    height:50px;
    display:flex;
    justify-content:space-between;
    padding:0px 8px;
    align-items:center;

`

export const IconWithBackground = styled.div`

background-color:whitesmoke;
width:30px;
padding:4px;

`