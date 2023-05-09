import React, {useContext, useState} from "react";
import { AppContext } from "../Context";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";

const Budget = () => {
    const [isEdit , setIsEdit] = useState(false);

    const { budget, dispatch } = useContext(AppContext);

    const handleEditClick = () => {
        setIsEdit(true);
    }

    const handleSaveClick = (val) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
        setIsEdit(false);
    }

    return <div>
        {isEdit ? <EditBudget onHandleSaveClick={handleSaveClick} budget={budget}/> : <ViewBudget onHandleEditClick={handleEditClick} budget={budget}/>}
    </div>
}

export default Budget;