import { Route, Routes } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import NotLogged from "./components/NotLogged";
import Logged from "./components/Logged";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";

import { setUser } from "./store/users";
import { setMovieGenres } from "./store/movieGenres";
import { setTvShowGenres } from "./store/tvShowGenres";

function App() {
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

  useEffect(() => {
    axios
      .get("/api/genres/movies", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((movieGenres) => {
        dispatch(setMovieGenres(movieGenres.data));
      });
  }, []);

  useEffect(() => {
    axios
      .get("/api/genres/tvShows", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((tvShowGenres) => {
        dispatch(setTvShowGenres(tvShowGenres.data));
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        {/* Public routes   */}
        <Route
          path="/"
          element={
            <>
              {!user.email ? <NotLogged /> : <Logged />}
              <Home />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" />
        {/* Logged user routes   */}
        <Route path="/myprofile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
