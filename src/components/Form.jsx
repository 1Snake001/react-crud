import React from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import services from "../services/services";

function Form({ type, user, getUserData, inputValues, setInputValues }) {
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (type === "update") {
      const newUserData = {
        id: user.id,
        name: inputValues.name,
        email: inputValues.email,
      };
      await services.updateData(newUserData, user.id);
    } else {
      await services.postData(inputValues);
    }
    setInputValues({
      name: "",
      email: "",
    });
    getUserData();
  };

  const naviGationHandler = () => {
    setInputValues({
      name: "",
      email: "",
    });
    navigate("/");
  };

  return (
    <section className="container">
      <button onClick={naviGationHandler} className="btn btn-link">
        Home
      </button>
      <form onSubmit={submitHandler} action="#">
        <Input
          onChange={onChangeHandler}
          name="name"
          inputValue={inputValues.name}
        />
        <Input
          onChange={onChangeHandler}
          name="email"
          inputValue={inputValues.email}
        />
        <button className="btn btn-primary">
          {type === "new" ? "Submit" : "Update"}
        </button>
      </form>
    </section>
  );
}

export default Form;
