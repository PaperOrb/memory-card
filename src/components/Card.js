import React from "react";

export function Card({ url, handleClick, order }) {
  return (
    <img style={order} data-cardname={url} src={`./images/${url}.png`} className="card" onClick={handleClick}></img>
  );
}
