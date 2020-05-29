import React from "react";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-owner-name">
            {props.owner.name}
          </span>
        </h3>
        <p>Phone Number: {props.owner.phoneNumber}</p>
      </div>
    </div>
  );
};

export default OwnerCard;