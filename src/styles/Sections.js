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
    background-color:white;
    border-bottom:1px solid whitesmoke;
    height:60px;
    display:flex;
    justify-content:space-between;
    padding:0px 8px;
    align-items:center;

`

export const IconWithBackground = styled.div`

background-color:whitesmoke;
width:40px;
height:40px;
padding:4px;
border-radius:100px;
color:rgb(87,87,87);
font-weight:600;
font-size:1.4rem;
display:flex;


`