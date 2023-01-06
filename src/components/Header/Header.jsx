import React from "react";
import axios from "axios";

import NotLogged from "./NotLogged";
import Logged from "./Logged";
import Search from "./Search";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/users";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get("/api/users/me", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((user) => {
        dispatch(setUser(user.data));
      });
  }, [user.id]);
  return (
    <div>
      <p>TMDB By Mechi</p>
      <Search />
      {!user.email ? <NotLogged /> : <Logged />}
    </div>
  );
};

export default Header;
