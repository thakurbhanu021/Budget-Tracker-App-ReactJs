import React,{useState} from "react";

const EditBudget = (props) => {
  const [newBudget, setNewBudget] = useState(props.budget);
  return (
    <div className="alert alert-secondary input-group">
      <input
        type="number"
        className="form-control"
        aria-describedby="button-addon2"
        value={newBudget}
        onChange={(event)=> setNewBudget(event.target.value)}
      />
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => props.onHandleSaveClick(newBudget)}
      >
        Save
      </button>
    </div>
  );
};

export default EditBudget;
