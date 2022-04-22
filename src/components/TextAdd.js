import React from "react";
function Text({para}){
    return <div className="texts">
        {para}
    </div>
}
export default function TextAdd() {

    const [text, setText] = React.useState(['Text 1','Text 2'])

    function addText(){
        setText(
            (previousArray) => [...previousArray,`Text ${previousArray.length + 1}`]
        )
    }
    const textContent = text.map(
        (p) => <Text  para={p}/>
    )
  return <div className="text-add">
      <hr />
      <button onClick={addText} className="text-add-button button" >
          Add Text
      </button>
      <div className="flex1">
          {textContent}
      </div>
  </div>;
}
