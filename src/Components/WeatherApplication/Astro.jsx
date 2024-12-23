import React from "react";
import sunriseIcon from "../../../assets/weather/sunrise.svg";
import sunsetIcon from "../../../assets/weather/sunset.svg";
import moonriseIcon from "../../../assets/weather/moonrise.svg";
import moonsetIcon from "../../../assets/weather/moonset.svg";
import sunIcon from "../../../assets/weather/sun.svg";
import moonIcon from "../../../assets/weather/moon.svg";
import AstroShimmerEffect from "./AstroShimmerEffect";
// import { useOutletContext } from 'react-router-dom'
import useWeatherData from "../../../hooks/useWeatherData";
import WeatherSpinner from "./WeatherSpinner";

const Astro = () => {
  const { weatherinfo, errMessage } = useWeatherData();
  // const weatherDataContext = useOutletContext()
  // const [weatherinfo,errMessage] = weatherDataContext

  return (
    <>
      <WeatherSpinner />
      {errMessage ? (
        <h1 className="text-center font-medium mt-2 text-red-600 text-sm">
          City Not Found
        </h1>
      ) : weatherinfo.city == undefined ? (
        <AstroShimmerEffect />
      ) : (
        <div className="w-80% h-full px-10 flex gap-10 rounded-md">
          <div className="p-4 flex flex-col gap-4">
            <div className="flex flex-col justify-center gap-2 bg-slate-200 p-2 items-center rounded-md">
              <p className="font-medium">{weatherinfo.sunrise}</p>
              <img src={sunriseIcon} alt="Sun Rise-icon" className="w-14" />
              <p className="text-lg font-medium capitalize">sunrise</p>
            </div>
            <div className="flex flex-col justify-center gap-2 bg-slate-200 p-2 items-center rounded-md">
              <p className="font-medium">{weatherinfo.sunset}</p>
              <img src={sunsetIcon} alt="Sun Rise-icon" className="w-14" />
              <p className="text-lg font-medium capitalize">sunset</p>
            </div>
            <div className="flex flex-col justify-center gap-2 bg-slate-200 p-2 items-center rounded-md">
              <p className="font-medium">{weatherinfo.moonrise}</p>
              <img src={moonriseIcon} alt="Sun Rise-icon" className="w-10" />
              <p className="text-lg font-medium capitalize">moonrise</p>
            </div>
            <div className="flex flex-col justify-center gap-2 bg-slate-200 p-2 items-center rounded-md">
              <p className="font-medium">{weatherinfo.moonset}</p>
              <img src={moonsetIcon} alt="Sun Rise-" className="w-10" />
              <p className="text-lg font-medium capitalize">moonset</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5 items-center">
            <p className="font-medium flex flex-col items-center">
              <span>Now :</span> {weatherinfo.is_day == 0 ? "Night" : "Day"} ,{" "}
              {weatherinfo.time.slice(10)}
            </p>
            {weatherinfo.is_day == 0 ? (
              <img src={moonIcon} alt="weather night icon" className="w-14" />
            ) : (
              <img src={sunIcon} alt="weather day icon" className="w-14" />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Astro;
