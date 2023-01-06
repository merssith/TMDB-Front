import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { isEmail, isValidPassword, samePassword } from "../utils/validation";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPass, setIsValidPass] = useState(true);
  const [areSamePass, setAreSamePass] = useState(true);

  const nameOnChange = (event) => {
    setName(event.target.value);
  };
  const lastNameOnChange = (event) => {
    setLastName(event.target.value);
  };
  const userNameOnChange = (event) => {
    setUserName(event.target.value);
  };
  const emailOnChange = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);
    isEmail(emailInput) ? setIsValidEmail(true) : setIsValidEmail(false);
  };
  const passwordOnChange = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
    isValidPassword(passwordInput)
      ? setIsValidPass(true)
      : setIsValidPass(false);
  };
  const passwordTwoOnChange = (event) => {
    const passwordTwoInput = event.target.value;
    setPasswordTwo(passwordTwoInput);
    samePassword(password, passwordTwoInput)
      ? setAreSamePass(true)
      : setAreSamePass(false);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidEmail && isValidPass && areSamePass) {
      axios
        .post("/api/users/register", {
          name: name,
          lastName: lastName,
          userName: userName,
          email: email,
          password: password,
        })
        .then((res) => console.log(res));
      navigate("/login");
    }
    if (!isValidEmail) {
      console.log("Invalid email address");
    }
    if (!isValidPass) {
      console.log("Invalid password");
    }
    if (!areSamePass) {
      console.log("Passwords must be the same");
    }
  };

  return (
    <div>
      <p>Register</p>
      <form>
        <label>
          Username:
          <input
            type="text"
            placeholder="Enter username"
            required
            onChange={userNameOnChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter name"
            required
            onChange={nameOnChange}
          />
        </label>
        <label>
          Lastname:
          <input
            type="text"
            placeholder="Enter lastname"
            required
            onChange={lastNameOnChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter email"
            required
            onChange={emailOnChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter password"
            required
            onChange={passwordOnChange}
          />
        </label>
        <label>
          Confirm password:
          <input
            type="password"
            placeholder="Confirm password"
            required
            onChange={passwordTwoOnChange}
          />
        </label>
        <input type="submit" onClick={handleSubmit} value="Register" />
      </form>
    </div>
  );
};

export default Register;
