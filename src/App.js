import { Route, Routes } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import SearchResult from "./components/SearchResult";

import { setMovieGenres } from "./store/movieGenres";
import { setTvShowGenres } from "./store/tvShowGenres";

function App() {
  const dispatch = useDispatch();

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
      <Header />
      <SideBar />
      <Routes>
        {/* Public routes   */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Logged user routes   */}
        <Route path="/myprofile" element={<Profile />} />
        <Route path="/searchResults" element={<SearchResult />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
