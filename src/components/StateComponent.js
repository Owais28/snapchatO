import React from "react";

// * Icons
// import { AiFillLinkedin } from "react-icons/ai";
// import { AiFillAlert } from "react-icons/ai";
// import {MdBookmark} from 'react-icons/md'
// import reacIcons {AiFillLayout} from 'react-icons';
// import { BsFillPlusCircleFill } from 'react-icons/bs'

export default function StateComponent() {

    // State 
    // state refers to values that is managed by the componet
    // ,similar to the variables declared inside the function.
    // * any time you have changing values that should be saved/displayed

    // * useState() > it Returns an array [undefined, f()]
    // * Destructuring Array
    const [count,setCount] = React.useState(0); 
    // * here 0 is initialState
    // at the render time this initial state is state of our component
    // that we are storing in 'count' variable
    
    // this function is event handler and called whenever user clicks on plus button
    // this function uses setCount function to change the state
    function addCount(){
            setCount( prevCount => prevCount + 1)
            
        
        // here the argument passed to setCount() is our current state that 
        // is bieng modified by call-back function
    }

    // this function is event handler and called whenever user clicks on subtract button 
    function subtractCount(){
        setCount( prevCount => prevCount - 1
        )
    }

    
    return <div className="state-container">
        <div className="state" id="state-number">
            {count}
        </div>
        <button className="plus-button button" onClick={addCount} >+</button>
        <button className="minus-button button" onClick={subtractCount}>-</button>
        
        
        
    </div>;
}
