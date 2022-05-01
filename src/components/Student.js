import React from "react";
import '../styles/student.css'

const Student = ({firstName, lastName, major, age, gender, isShow, city, state,country,grade,height}) => {
    const [isVisible,setIsShow] = React.useState(isShow);

    // const styles = {
    //     backgroundColor : "whitesmoke"
    // }

    function toggleShow(){
        setIsShow(
            prevVal => !prevVal
            
        )
        
    }
     return (<div className="student-container">
        <h3 className="student-name">{firstName} {lastName}</h3>
        <h4 className="student-age">{age}</h4>
        <h4 className="student-gender">{gender}</h4>
        {isVisible && <h4 className="student-major">{major}</h4>}
        {isVisible && <div className="student-more">
                <h6>Address : <span>{city}, {state}, {country}</span></h6>
                <h6>Grade : <span>{grade}</span></h6>
                <h6>Height : <span>{height}</span></h6>
            </div>}
        <button className="student-button" onClick={toggleShow} > show major</button>
    </div>)
}

export default Student;
