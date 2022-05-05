import React from "react";
import ReactDOM from 'react-dom';
// firebase
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// Components
// import Navbar from "./components/Navbar";
// import MainContent from "./components/MainContent";
// import Card from "./components/Card";
// import Map from "./components/Map";
// import data from "./data"
// import quotes from "./quotes";
// import posts from "./data/posts";
import './index.css';
// import StateComponent from "./components/StateComponent";
// import RandomQuote from "./components/RandomQuote";
// import TextAdd from "./components/TextAdd";
// import BlogPost from "./components/BlogPost";
// import Boxes from "./components/Boxes";
// import Search from "./components/Search";
// import ConditionalRendering from "./components/ConditionalRendering";



function App(props) {

    const list = [
        {
            title: 'React',
            url: 'https://reactjs.org/',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: 0,
        },
        {
            title: 'Redux',
            url: 'https://redux.js.org/',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: 1,
        },
    ];
    // array of <Card/> element
    // const cards = data.map( prop => {
    //     return <Card
    //         key={prop.id} 
    //         img={prop.img}
    //         userName={prop.userName}
    //         userWeb={prop.userWeb} 
    //     />
    // });

    // Lists
    
    return (
        <div>
            {/* <Navbar/> */}
            {/* <MainContent/> */}
            {/* <div className="flex">
            {cards}
            </div> */}
            {/* <Map/> */}
            {/* <StateComponent/> */}
            {/* <RandomQuote {...quotes}/> */}
            {/* <TextAdd/> */}
            {/* <div className="flex">
            <BlogPost post = {posts[0]}/>
            </div> */}
            {/* <Boxes/> */}
            {/* <Search className="search-wrapper"/>  */}
            {/* <ConditionalRendering/> */}
            <List list={list}/>
            <Search/>
            <Caution type="tags caution"  text="lorem ispkfn fdsf sdfla ape fonf dsd fdkfdf sfpfs fs;fjsff "/>
            <Caution type="tags warning"  text="lorem ispkfn fdsf sdfla ape fonf dsd fdkfdf sfpfs fs;fjsff "/>
            <Caution type="tags tip"  text="lorem ispkfn fdsf sdfla ape fonf dsd fdkfdf sfpfs fs;fjsff "/>
        </div>
        
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<App />
);




const List = (props) => 
    <ul>
        {
            props.list.map(listItem => <Item key={listItem.objectID} item={listItem}/>)
        }
    </ul>

const Search = () => {
    // do something in between
    const handleChnage = (event) => console.log(event.target.value)
    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={handleChnage} />
        </div>
    );
    };

const Item = props => <li>
    <span>{props.item.title}, </span>
    <span>{props.item.author}, </span>
    <strong>{props.item.points}</strong>
</li>

const Caution = props => 
<div className={props.type}>
    {props.type === "tags caution" && <div className="icon">⚠️</div>}  
    {props.type === "tags warning" && <div className="icon">⛔</div>}
    {props.type === "tags tip" && <div className="icon">💡</div>}
    <div className="text">{props.text}</div>
</div>