import React from "react";

export default function IntensityCard() {
  return (
    <div className="intCard" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} />
      </div>
      <div className="info-wrapper">
        <h2>{props.name}</h2>
      </div>
    </div>
  )
}
