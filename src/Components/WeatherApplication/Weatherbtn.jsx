import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Weatherbtn = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <>
      <button
        onClick={() => setHamburger(!hamburger)}
        className="block ml-auto text-2xl px-2 py-1 relative md:hidden"
      >
        &#9776;
      </button>
      {hamburger && (
        <div
          onClick={() => setHamburger(!hamburger)}
          className="w-[160px] bg-gray-800 absolute top-0 z-10 flex flex-col items-start p-3 gap-2 rounded-r-md md:hidden"
        >
          <NavLink
            to="/forcast"
            className={(isActive) => {
              if (isActive.isActive) {
                return "border rounded-md";
              }
            }}
          >
            <button className="p-1 w-32 bg-blue-300 text-white border-none rounded-md capitalize outline-none md:weather-sidebar-btn">
              current Weather
            </button>
          </NavLink>
          <NavLink
            to="/forcast/16-days-forcast"
            className={(isActive) => {
              if (isActive.isActive) {
                return "border rounded-md";
              }
            }}
          >
            <button className="p-1 w-32 bg-blue-300 text-white border-none rounded-md capitalize outline-none md:weather-sidebar-btn">
              16 days forcast
            </button>
          </NavLink>
          <NavLink
            to="/forcast/wind"
            className={(isActive) => {
              if (isActive.isActive) {
                return "border rounded-md";
              }
            }}
          >
            <button className="p-1 w-32 bg-blue-300 text-white border-none rounded-md capitalize outline-none md:weather-sidebar-btn">
              wind
            </button>
          </NavLink>
          <NavLink
            to="/forcast/temprature"
            className={(isActive) => {
              if (isActive.isActive) {
                return "border rounded-md";
              }
            }}
          >
            <button className="p-1 w-32 bg-blue-300 text-white border-none rounded-md capitalize outline-none md:weather-sidebar-btn">
              temprature
            </button>
          </NavLink>
          <NavLink
            to="/forcast/precipitaion"
            className={(isActive) => {
              if (isActive.isActive) {
                return "border rounded-md";
              }
            }}
          >
            <button className="p-1 w-32 bg-blue-300 text-white border-none rounded-md capitalize outline-none md:weather-sidebar-btn">
              precipitation
            </button>
          </NavLink>
          <NavLink
            to="/forcast/rain"
            className={(isActive) => {
              if (isActive.isActive) {
                return "border rounded-md";
              }
            }}
          >
            <button className="p-1 w-32 bg-blue-300 text-white border-none rounded-md capitalize outline-none md:weather-sidebar-btn">
              rain chances
            </button>
          </NavLink>
          <NavLink
            to="/forcast/cloud"
            className={(isActive) => {
              if (isActive.isActive) {
                return "border rounded-md";
              }
            }}
          >
            <button className="p-1 w-32 bg-blue-300 text-white border-none rounded-md capitalize outline-none md:weather-sidebar-btn">
              cloud
            </button>
          </NavLink>
          <NavLink
            to="/forcast/humidity"
            className={(isActive) => {
              if (isActive.isActive) {
                return "border rounded-md";
              }
            }}
          >
            <button className="p-1 w-32 bg-blue-300 text-white border-none rounded-md capitalize outline-none md:weather-sidebar-btn">
              humidity
            </button>
          </NavLink>
          <NavLink
            to="/forcast/astro"
            className={(isActive) => {
              if (isActive.isActive) {
                return "border rounded-md";
              }
            }}
          >
            <button className="p-1 w-32 bg-blue-300 text-white border-none rounded-md capitalize outline-none md:weather-sidebar-btn">
              Astro
            </button>
          </NavLink>
        </div>
      )}
      <div className="hidden w-[20%] md:flex flex-col items-start p-3 gap-2 ">
        <NavLink
          to="/forcast"
          className={(isActive) => {
            if (isActive.isActive) {
              return "border rounded-md";
            }
          }}
        >
          <button className="weather-sidebar-btn">current Weather</button>
        </NavLink>
        <NavLink
          to="/forcast/16-days-forcast"
          className={(isActive) => {
            if (isActive.isActive) {
              return "border rounded-md";
            }
          }}
        >
          <button className="weather-sidebar-btn">16 days forcast</button>
        </NavLink>
        <NavLink
          to="/forcast/wind"
          className={(isActive) => {
            if (isActive.isActive) {
              return "border rounded-md";
            }
          }}
        >
          <button className="weather-sidebar-btn">wind</button>
        </NavLink>
        <NavLink
          to="/forcast/temprature"
          className={(isActive) => {
            if (isActive.isActive) {
              return "border rounded-md";
            }
          }}
        >
          <button className="weather-sidebar-btn">temprature</button>
        </NavLink>
        <NavLink
          to="/forcast/precipitaion"
          className={(isActive) => {
            if (isActive.isActive) {
              return "border rounded-md";
            }
          }}
        >
          <button className="weather-sidebar-btn">precipitation</button>
        </NavLink>
        <NavLink
          to="/forcast/rain"
          className={(isActive) => {
            if (isActive.isActive) {
              return "border rounded-md";
            }
          }}
        >
          <button className="weather-sidebar-btn">rain chances</button>
        </NavLink>
        <NavLink
          to="/forcast/cloud"
          className={(isActive) => {
            if (isActive.isActive) {
              return "border rounded-md";
            }
          }}
        >
          <button className="weather-sidebar-btn">cloud</button>
        </NavLink>
        <NavLink
          to="/forcast/humidity"
          className={(isActive) => {
            if (isActive.isActive) {
              return "border rounded-md";
            }
          }}
        >
          <button className="weather-sidebar-btn">humidity</button>
        </NavLink>
        <NavLink
          to="/forcast/astro"
          className={(isActive) => {
            if (isActive.isActive) {
              return "border rounded-md";
            }
          }}
        >
          <button className="weather-sidebar-btn">Astro</button>
        </NavLink>
      </div>
    </>
  );
};

export default Weatherbtn;
