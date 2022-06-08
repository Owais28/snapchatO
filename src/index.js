import React from "react";
import ReactDOM  from "react-dom/client";
import Navbar from "./components/Navbar";
import BottomMenu from "./components/BottomMenu";
import './index.css'
import './styles/global.css'
import './styles/navbar.css'
import { MobileSection, SectionWithPadding } from "./styles/Sections";
import ChatIndividual from "./components/ChatIndividual";


export default function App() {
    return <div className="app">
    <MobileSection>
        <Navbar/>
        <ChatIndividual person="M Imamuddin" status="received"/>
        <ChatIndividual person="Chetan" status="received"/>
        <ChatIndividual/>
        <ChatIndividual/>
        <ChatIndividual/>
        <ChatIndividual/>
        <ChatIndividual/>
        <ChatIndividual/>
        <ChatIndividual/>
        <ChatIndividual/>
        <ChatIndividual/>
        <ChatIndividual/>
        <ChatIndividual/>
        <ChatIndividual/>
        <ChatIndividual/>

        <BottomMenu/>
    </MobileSection>
    </div>
}






const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
    )