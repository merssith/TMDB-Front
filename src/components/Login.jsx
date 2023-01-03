import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../store/users";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameOnChange = (e) => {
    const userNameInput = e.target.value;
    setUserName(userNameInput);
  };
  const passwordOnChange = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/users/login",
        {
          userName,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((user) => {
        dispatch(setUser(user.data));
        navigate("/");
      })
      .catch((err) => {
        // console.log("ERROR!");
      });
  };
  return (
    <div>
      <p>LOGIN</p>
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
          Password:
          <input
            placeholder="Enter password"
            type="password"
            required
            onChange={passwordOnChange}
          />
        </label>
        <input type="submit" onClick={handleLogin} value="Submit" />
      </form>
      <p>Not registered?</p>
      <p>
        <a href="/register">REGISTER</a>
      </p>
    </div>
  );
};
export default Login;
