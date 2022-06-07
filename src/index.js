import React from "react";
import ReactDOM  from "react-dom/client";
import { BiAddToQueue, BiCreditCardFront, BiPen, BiSearch } from "react-icons/bi";
import Navbar from "./components/Navbar";
import './index.css'


   export const NotificationContext = React.createContext()

const App = () =>{

    const [notificationCount, setNotificationCount] = React.useState(95)

    return(<>
    <NotificationContext.Provider value={{notificationCount, setNotificationCount}}>
        {/* {console.log(NotificationContext)} */}
    <Navbar/>
    <div className="search__wrapper" onClick={() => setNotificationCount(notificationCount + 1)}>
    <BiAddToQueue className="addToQueue"/>
    </div>
    
    </NotificationContext.Provider>
    </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
)