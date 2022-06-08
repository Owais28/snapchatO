import React from "react";
import ReactDOM  from "react-dom/client";
import Navbar from "./components/Navbar";
import BottomMenu from "./components/BottomMenu";
import './index.css'
import './styles/global.css'
import './styles/navbar.css'
import { MobileSection, SectionWithPadding } from "./styles/Sections";


export default function App() {
    return <MobileSection>
        <Navbar/>
        <BottomMenu/>
    </MobileSection>;
}






const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App/>
    )