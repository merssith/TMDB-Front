import React from "react";
import axios from "axios";
import { setUser } from "../store/users";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Logged = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleLogOut = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/users/logout",
        {},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(() => dispatch(setUser({})))
      .then(() => navigate("/"));
  };

  return (
    <div>
      <p>Hi {user.name}, Welcome to TMDB by Mechi</p>
      <a href="/myprofile">MY PROFILE</a>
      <form>
        <input type="submit" onClick={handleLogOut} value="Logout" />
      </form>
    </div>
  );
};

export default Logged;
