import React from "react";
import { Link } from "react-router-dom";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
       <span> {props.location.name} </span>
       <button type="button" onClick={() => props.deleteAnimal(props.location.id)}>Delete Location</button>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;