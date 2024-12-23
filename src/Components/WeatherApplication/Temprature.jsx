import React from "react";
import tempratureIcon from "../../../assets/weather/hightemp-svg.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useOutletContext } from 'react-router-dom';
import WeatherShimmerEffect from "./WeatherShimmerEffect";
import useWeatherData from "../../../hooks/useWeatherData";
import WeatherSpinner from "./WeatherSpinner";

const Temprature = () => {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
  };
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
        <WeatherShimmerEffect />
      ) : (
        <div className="w-[80%] p-4 pl-8 flex text-black gap-4 flex-col">
          <div className="p-3 flex flex-col justify-center">
            <h1 className=" text-xl font-bold text-red-700 uppercase underline">
              temprature
            </h1>
            <p className="font-semibold text-sm ml-5">Now</p>
            <div className="flex items-start flex-col mt-2">
              <img
                src={weatherinfo.weatherIcon}
                alt="current wather icon"
                className="w-20 ml-1 border p-1 rounded-md"
              />
              <div className="flex items-center">
                <img
                  src={tempratureIcon}
                  alt="current wind icon"
                  className="w-10"
                />
                <p className="text-3xl font-semibold">
                  {weatherinfo.Temprature}&deg;C
                </p>
              </div>
            </div>
            <p className="text-sm font-medium capitalize mt-2">
              feel like : {weatherinfo.FeelLike}&deg;C
            </p>
            <p className="text-sm font-semibold capitalize">
              maximum temprature : {weatherinfo.maxTemp}&deg;C
            </p>
            <p className="text-sm font-semibold capitalize">
              minimum temprature : {weatherinfo.minTemp}&deg;C
            </p>
            <p className="text-sm font-semibold capitalize">
              average of temprature : {weatherinfo.avg_temp}&deg;C
            </p>
          </div>
          <Slider {...settings} className="w-[710px] p-3">
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
                    <h3 className="text-center font-medium">
                      {time > 12 ? time - 12 : time == 0 ? "12" : time}
                      {time < 12 ? " AM" : " PM"}
                    </h3>
                    <div className="flex items-center justify-center">
                      <img
                        src={obj.condition.icon}
                        alt="current-weather-icon"
                        className="w-14"
                      />
                    </div>
                    <div className="flex items-center">
                      <img
                        src={tempratureIcon}
                        alt="temprature-icon"
                        className="w-6"
                      />
                      <p className="text-center text-sm font-medium">
                        {obj.temp_c}&deg;C
                      </p>
                    </div>
                    <p className="text-center text-xs font-medium">
                      Feel Like : {obj.feelslike_c}&deg;C
                    </p>
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

export default Temprature;
