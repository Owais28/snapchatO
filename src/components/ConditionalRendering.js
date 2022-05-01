import React from "react";
import students from '../data/StudentJson.json'
import Student from "./Student";
import '../styles/student.css'

export default function ConditionalRendering(props) {
    const studentsAll = students.Full;

    return <div className="conditional-rendering-container">
        {studentsAll.map(
            student => 
            <Student
                key={student.ID}
                firstName={student.FirstName}
                lastName = {student.LastName}
                gender = {student.Gender}
                age = {student.Age}
                major = {student.Major}
                isShow = {false}
                city = {student.City}
                state = {student.State}
                country = {student.Country}
                grade = {student["Grade "]}
                height = {student.Height}
                
            />
        )}
        </div>;
}
