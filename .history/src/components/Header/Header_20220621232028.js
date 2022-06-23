import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import { filterSearch } from "../../features/movies/filterSearchSlice";
import {
  filterSearchSelector,
  usernameLoginSelector,
} from "../../features/selectors";
import { dataLogin } from "../../features/movies/loginSlice";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputSearch, setInputSearch] = useState("");
  const content = useSelector(filterSearchSelector);
  const usernameLogin = useSelector(usernameLoginSelector);

  const submitHandler = (e) => {
    e.preventDefault();

    if (content !== "") {
      dispatch(fetchAsyncMovies(content));
      dispatch(fetchAsyncShows(content));
      setInputSearch("");
    } else alert("Chua nhap gi");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(
      dataLogin({
        username: "",
        password: "",
      })
    );
  };

  return (
    <div className="header">
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        Movie App
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={inputSearch}
            placeholder="Search Movies or Shows"
            onChange={(e) => {
              setInputSearch(e.target.value);
              dispatch(filterSearch(e.target.value));
            }}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-login">
        {usernameLogin === "" ? (
          <div onClick={handleLogin}>Login</div>
        ) : (
          <div className="user-login-info">
            <div>{usernameLogin}</div>
            <div onClick={handleLogout} className="user-logout">Log out</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
