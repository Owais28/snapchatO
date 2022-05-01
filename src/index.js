import React from "react";
import ReactDOM from 'react-dom';
// firebase
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// Components
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Card from "./components/Card";
import Map from "./components/Map";
import data from "./data"
import quotes from "./quotes";
import posts from "./data/posts";
import './index.css';
import StateComponent from "./components/StateComponent";
import RandomQuote from "./components/RandomQuote";
import TextAdd from "./components/TextAdd";
import BlogPost from "./components/BlogPost";
import Boxes from "./components/Boxes";
import Search from "./components/Search";
import ConditionalRendering from "./components/ConditionalRendering";



function App(props) {

    // array of <Card/> element
    const cards = data.map( prop => {
        return <Card
            key={prop.id} 
            img={prop.img}
            userName={prop.userName}
            userWeb={prop.userWeb} 
        />
    });
    return (
        <div>
            <Navbar/>
            <MainContent/>
            <div className="flex">
            {cards}
            </div>
            {/* <Map/> */}
            <StateComponent/>
            {/* <RandomQuote {...quotes}/> */}
            <TextAdd/>
            <div className="flex">
            <BlogPost post = {posts[0]}/>
            </div>
            <Boxes/>
            <Search className="search-wrapper"/> 
            <ConditionalRendering/>
        </div>
        
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<App />
);

// Import the functions you need from the SDKs you need

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBlGHnf8V_HiMGOmu5Ql4DxrTCnHukSZFM",
//     authDomain: "react-facts.firebaseapp.com",
//     projectId: "react-facts",
//     storageBucket: "react-facts.appspot.com",
//     messagingSenderId: "800340411508",
//     appId: "1:800340411508:web:7f6c36c0631ec839e3fd21",
//     measurementId: "G-3548QKL94S"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);