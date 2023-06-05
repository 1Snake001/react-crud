import React, {  useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import services from "../services/services";

function Form({ type, user, getUserData, inputValues, setInputValues }) {
  const navigate = useNavigate();

  const [isValidForm, setIsValidForm] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
  });

  const textForErrorMessages = {
    requiredName: "Please enter real name!",
    moreThan3: "Please enter real name!",
    requiredEmail: "Please enter a valid email address!",
  };

  // validateInputChecker functions
  const isRealName = (name) => {
    const nameRegex =
      /^[A-Za-zÁáÉéÍíÓóÖöŐőÚúÜüŰű\s]*[A-Za-zÁáÉéÍíÓóÖöŐőÚúÜüŰű][A-Za-zÁáÉéÍíÓóÖöŐőÚúÜüŰű\s]*$/;
    return nameRegex.test(name);
  };

  const isGreaterThanThree = (name) => {
    return name.length > 3;
  };

  const isEmail = (email) => {
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    return emailRegex.test(email);
  };

  let validators = {
    name: {
      requiredName: isRealName,
      moreThan3: isGreaterThanThree,
    },
    email: {
      requiredEmail: isEmail,
    },
  };

  const validator = (name, value) => {
    let validator = validators[name];
    let isValid = true;
    for (let validFn in validator) {
      if (!validator[validFn](value)) {
        setErrorMessages((prev) => ({
          ...prev,
          [name]: textForErrorMessages[validFn],
        }));
        isValid = false;
      } else {
        setErrorMessages({ ...errorMessages, [name]: "" });
      }
    }
    setIsValidForm(isValid);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const onblurHandler = (event) => {
    const { name, value } = event.target;
    validator(name, value);
  };

  function formValidation() {
    Object.entries(inputValues).map((value) => validator(value[0], value[1]));
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    formValidation();

    if (isValidForm) {
      if (type === "update") {
        const newUserData = {
          id: user.id,
          name: inputValues.name,
          email: inputValues.email,
        };
        await services.updateData(newUserData, newUserData.id);
      } else {
        await services.postData(inputValues);
      }
      setInputValues({
        name: "",
        email: "",
      });
      getUserData();
    } else {
      return;
    }
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
          errorMessage={errorMessages.name}
          onChange={onChangeHandler}
          onBlur={onblurHandler}
          name="name"
          inputValue={inputValues.name}
        />
        <Input
          errorMessage={errorMessages.email}
          onBlur={onblurHandler}
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
