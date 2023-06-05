import React from "react";
import Form from "./Form";

function NewUserForm({ getUserData, inputValues, setInputValues}){
    return(
        <Form type="new" getUserData={getUserData} inputValues={inputValues} setInputValues={setInputValues}/>
    )
}

export default NewUserForm;