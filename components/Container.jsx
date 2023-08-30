import React from "react";
import Card from "./Card.jsx";
import data from "../data.js";
import "../src/App.css";

export default function Container() {
  const CardElements = data.map((obj, index) => {
    return (
      <div key={index}>
        <Card
          location={obj.location}
          link={obj.link}
          title={obj.title}
          dateStart={obj.dateStart}
          dateEnd={obj.dateEnd}
          desc={obj.desc}
          img={obj.img}
        />
        {index !== data.length-1 && <div className="divider"></div>}
    </div>
    );
  });
  return <div id="container-div">{CardElements}</div>;
}
