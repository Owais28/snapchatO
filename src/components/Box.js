import React from "react";

export default function Box(props) {
  const [color,setColor] = React.useState(props.isOn)

    const styles = {
            width: "100px",
            height: "100px",
            borderRadius: "10px",
            backgroundColor: props.isOn? "black" : "white",
            display: "inline-block",
            margin: "10px",
            border: "1px solid black",
            justifyContent: "center",
            alignItems: "center"
    }
  return <div className="box" style={
styles
  }>
      {props.number}
  </div>
}
