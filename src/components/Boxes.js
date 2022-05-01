import React from "react";
import Box from "./Box"
import box from '../data/boxes'

export default function Boxes() {
    const boxes = box.map(
        (b) => <Box key={b.id} number={b.id} isOn={b.isOn}/>
    )
  return <div>
      {boxes}
  </div>;
}
