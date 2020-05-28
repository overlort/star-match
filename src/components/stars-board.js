import math from "../util/math";
import React from "react";

const StarsBoard = props => (
  <>
    {math.range(1, props.count).map(starId => (
      <div key={starId} className="star" />
    ))}
  </>
);

export default StarsBoard
