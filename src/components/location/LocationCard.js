import React from "react";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
       <span> {props.location.name} </span>
      </div>
    </div>
  );
};

export default LocationCard;