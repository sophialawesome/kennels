import React from "react";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-employee-name">
            {props.employee.name}
          </span>
        </h3>
        <p></p>
      </div>
    </div>
  );
};

export default EmployeeCard;