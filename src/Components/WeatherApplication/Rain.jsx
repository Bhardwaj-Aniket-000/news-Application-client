import React from "react";
import RainIcon from "../../../assets/weather/umbrella2.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useOutletContext } from 'react-router-dom';
import WeatherShimmerEffect from "./WeatherShimmerEffect";
import useWeatherData from "../../../hooks/useWeatherData";
import WeatherSpinner from "./WeatherSpinner";

const Rain = () => {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const { weatherinfo, errMessage, OneDayWeather } = useWeatherData();
  // const weatherDataContext = useOutletContext()
  // const [weatherinfo,errMessage,OneDayWeather] = weatherDataContext

  return (
    <>
      <WeatherSpinner />
      {errMessage ? (
        <h1 className="text-center font-medium mt-2 text-red-600 text-sm">
          City Not Found
        </h1>
      ) : weatherinfo.city == undefined ? (
        <WeatherShimmerEffect />
      ) : (
        <div className="w-[80%] p-4 pl-8 flex text-black gap-4 flex-col">
          <div className="p-3 flex flex-col justify-center">
            <h1 className=" md:text-xl font-bold text-red-700 uppercase underline">
              rain chances
            </h1>
            <p className="font-semibold text-sm ml-1 md:ml-5">Now</p>
            <div className="flex items-start flex-col mt-2">
              <img
                src={weatherinfo.weatherIcon}
                alt="current wather icon"
                className="w-14 md:w-20 ml-1 border p-1 rounded-md"
              />
              <div className="flex items-center mt-2">
                <img src={RainIcon} alt="raining icon" className="w-10 mt-2" />
                <p className="text-xl md:text-3xl font-semibold">
                  {OneDayWeather.filter((obj) => {
                    return (
                      obj.time.slice(11).split("").splice(0, 2).join("") ==
                      new Date().getHours()
                    );
                  }).map((obj) => {
                    return obj.chance_of_rain;
                  })}
                  %
                </p>
              </div>
            </div>
            <p className="text-xs md:text-sm font-medium mt-2">
              Today Rain Chances : {weatherinfo.daily_chance_of_rain}%
            </p>
            <p className="text-xs md:text-sm font-medium mt-1 capitalize">
              daily will it rain :{" "}
              {weatherinfo.daily_will_it_rain == 1 ? "Yes" : "No"}
            </p>
          </div>
          <Slider
            {...settings}
            className="w-[120%] mx-auto md:mx-0 md:w-[710px] p-1 md:p-3"
          >
            {weatherinfo.hourWeather.map((obj, ind) => {
              const time = Number(
                obj.time.slice(10).split("")[1] +
                  obj.time.slice(10).split("")[2]
              );
              return (
                <div key={ind}>
                  <div className="flex flex-col gap-2 w-[90%] rounded-md bg-slate-200 p-2">
                    <h5 className="text-center text-xs font-medium">
                      {obj.time.split("").splice(5, 5).join("")}
                    </h5>
                    <h3 className="text-center tex-xs font-medium">
                      {time > 12 ? time - 12 : time == 0 ? "12" : time}
                      {time < 12 ? " AM" : " PM"}
                    </h3>
                    <div className="flex flex-col items-center justify-center">
                      <img
                        src={obj.condition.icon}
                        alt="current-weather-icon"
                        className="w-10 md:w-14"
                      />
                    </div>
                    <div className="flex items-center">
                      <img
                        src={RainIcon}
                        alt="raining-icon"
                        className="w-8 mt-2"
                      />
                      <p className="text-center text-xs md:text-sm font-medium">
                        {obj.chance_of_rain}%
                      </p>
                    </div>
                  </div>
                </div>
              );
              // time >= hours &&
            })}
          </Slider>
        </div>
      )}
    </>
  );
};

export default Rain;
