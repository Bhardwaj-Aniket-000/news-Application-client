import React, { useState } from "react";
import searchIcon from "../../assets/svg/search.svg";
import { NavLink, useLocation } from "react-router-dom";
import useNewsData from "../../hooks/useNewsData";

function Navbar() {
  const { inputValue, setInputValue } = useNewsData();
  const location = useLocation();
  const [hamburger, sethamburger] = useState(false);

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                if (isActive) {
                  return "isActive";
                }
              }}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/world"
              className={({ isActive }) => {
                if (isActive) {
                  return "isActive";
                }
              }}
            >
              world
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tech"
              className={({ isActive }) => {
                if (isActive) {
                  return "isActive";
                }
              }}
            >
              tech
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sports"
              className={({ isActive }) => {
                if (isActive) {
                  return "isActive";
                }
              }}
            >
              sports
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/haryana"
              className={({ isActive }) => {
                if (isActive) {
                  return "isActive";
                }
              }}
            >
              haryana
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/india-politics"
              className={({ isActive }) => {
                if (isActive) {
                  return "isActive";
                }
              }}
            >
              politics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/india-crime"
              className={({ isActive }) => {
                if (isActive) {
                  return "isActive";
                }
              }}
            >
              crime
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/forcast"
              className={({ isActive }) => {
                if (isActive) {
                  return "isActive";
                }
              }}
            >
              Weather
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feedbackAuth"
              className={({ isActive }) => {
                if (isActive) {
                  return "isActive";
                }
              }}
            >
              feedback
            </NavLink>
          </li>
        </ul>

        {location.pathname.includes("/feedbackAuth") ||
        location.pathname == "/forcast" ? (
          ""
        ) : (
          <div className="search">
            <input
              type="search"
              name="search"
              id="search"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <img src={searchIcon} alt="search icon" />
          </div>
        )}
      </nav>
      <div className="hamburger-nav">
        <button onClick={() => sethamburger(!hamburger)}>&#9776;</button>
        {hamburger && (
          <div
            className="hamburger-content"
            onClick={() => sethamburger(!hamburger)}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  if (isActive) {
                    return "isActive";
                  }
                }}
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/world"
                className={({ isActive }) => {
                  if (isActive) {
                    return "isActive";
                  }
                }}
              >
                world
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tech"
                className={({ isActive }) => {
                  if (isActive) {
                    return "isActive";
                  }
                }}
              >
                tech
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sports"
                className={({ isActive }) => {
                  if (isActive) {
                    return "isActive";
                  }
                }}
              >
                sports
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/haryana"
                className={({ isActive }) => {
                  if (isActive) {
                    return "isActive";
                  }
                }}
              >
                haryana
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/india-politics"
                className={({ isActive }) => {
                  if (isActive) {
                    return "isActive";
                  }
                }}
              >
                politics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/india-crime"
                className={({ isActive }) => {
                  if (isActive) {
                    return "isActive";
                  }
                }}
              >
                crime
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/forcast"
                className={({ isActive }) => {
                  if (isActive) {
                    return "isActive";
                  }
                }}
              >
                Weather
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/feedbackAuth"
                className={({ isActive }) => {
                  if (isActive) {
                    return "isActive";
                  }
                }}
              >
                feedback
              </NavLink>
            </li>
          </div>
        )}
        {location.pathname.includes("/feedbackAuth") ||
        location.pathname == "/forcast" ? (
          ""
        ) : (
          <div className="search">
            <input
              type="search"
              name="search"
              id="search"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <img src={searchIcon} alt="search icon" />
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
