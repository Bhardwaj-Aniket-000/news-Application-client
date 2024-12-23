import React from "react";
import Weatherbtn from "./Weatherbtn";
import { Outlet } from "react-router-dom";
import ForcastInput from "./ForcastInput";
// import { WeatherProvider } from "../../../contexts/WeatherContext";
import useWeatherData from "../../../hooks/useWeatherData";
import LoadingBar from "react-top-loading-bar";

const WeatherApplication = () => {
  const style = {
    position: "absolute",
    background: "red",
  };
  const { progress } = useWeatherData();

  return (
    <>
      {/* <WeatherProvider> */}
      <LoadingBar style={style} progress={progress} />
      <div className="h-full w-full min-h-[100vh] bg-slate-100 relative md:p-4 md:flex md:gap-5">
        <Weatherbtn />
        <div className="w-full md:flex md:flex-col md:w-[80%]">
          <ForcastInput />
          <Outlet />
        </div>
      </div>
      {/* </WeatherProvider> */}
    </>
  );
};

export default WeatherApplication;
