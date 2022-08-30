import React from "react"

export default function Card(props) {
    let showDate 
    if(props.travel.endDate === "") {
        showDate="";
    } else {
        showDate = " - " + props.travel.endDate;
    }
    
    console.log(props.travel.imageUrl)
  
    return (
        <>

        <img className="card-img" src={props.travel.imageUrl} alt="travel-pic" />
        <div className="container">
        <div className="line-one">
        <h1 className="card-title">{props.travel.title}</h1>
        <div className="map-logo">
        <img  src="./images/location_on_FILL0_wght400_GRAD0_opsz48.png" alt="pin-drop" />
        </div>
        <button href={props.travel.googleMapsUrl}>{props.travel.location}</button>
        </div>
        <h3 className="dates">{props.travel.startDate} <div className="end">{showDate}</div></h3>
        <p className="card-description">{props.travel.description}</p>
        </div>
 
        </>
        
        
    )
}