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
    // padding-bottom:8px;
    position:sticky;

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

export const FixedBottomSection = styled.div`
position:fixed;
bottom:0;
left:0;
width:100%;
background-color: black;
padding:0px 20px;
height:40px;
color:white;

`

export const FlexWithSpaceBetween = styled.div`
display:flex;
justify-content:space-between;
color: white;
height:100%;
align-items:center;
`
export const Icon = styled.div`

.icon {
    font-size : ${(props)=> props.size}rem ;
}
` 

