import React from "react";

const ViewBudget = (props) => {
  return ( <div className="alert alert-secondary d-flex justify-content-between align-items-center">
      <span>Budget: ${props.budget}</span>
      <button className="btn btn-primary" onClick={props.onHandleEditClick}>Edit</button>
    </div>
  );
};

export default ViewBudget;
