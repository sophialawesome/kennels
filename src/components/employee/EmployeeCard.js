import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-employee-name">Bark Wahlberg</span>
        </h3>
        <p>Phone Number: 000-000-0000</p>
      </div>
    </div>
  );
};

export default EmployeeCard;