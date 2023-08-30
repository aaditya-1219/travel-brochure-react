import React from "react"
import "../src/App.css"

export default function Card(props){
    return (
        <div className="card-div">
            <img src={props.img}/>
            <div id="card-description">
                <div id="location-div">
                    <a><img src="../images/placeholder.png"/></a>
                    <span>{props.location}</span>
                    <a href={props.link} className="map-link" tabindex="-1">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h2>{props.dateStart} - {props.dateEnd}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}