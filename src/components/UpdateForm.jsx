import Form from "./Form";

function UpdateForm({ user, getUserData, inputValues, setInputValues}){

    return(
      <Form type="update" user={user} getUserData={getUserData} inputValues={inputValues} setInputValues={setInputValues}/>
    )
}

export default UpdateForm;