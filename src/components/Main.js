import React from "react";

export default function (props) {
  return (
    <>
      <div className="main">
        <img src={props.item.img} className="main-img" />
        <div className="main-info">
          <img src="./images/fill1.png"  className="location-tag"/>
          <span className="country">{props.item.country}</span>
          <span className="view">
            <u>View on Google Maps</u>
          </span>
          <h1>{props.item.location}</h1>
          <time dateTime="12-01-2021">
            <b>{props.item.date}</b>
          </time>
          <p>{props.item.description}</p>
        </div>
      </div>
    </>
  );
}
