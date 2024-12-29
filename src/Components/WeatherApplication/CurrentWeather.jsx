import React from "react";
import tempratureIcon from "../../../assets/weather/hightemp-svg.svg";
import locationIcon from "../../../assets/weather/location.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useLocation } from 'react-router-dom'
// import { useOutletContext } from 'react-router-dom'
import WeatherShimmerEffect from "./WeatherShimmerEffect";
import WeatherSpinner from "./WeatherSpinner";
import useWeatherData from "../../../hooks/useWeatherData";

const HomeWeather = () => {
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
  const { weatherinfo, errMessage } = useWeatherData();

  // const weatherDataContext = useOutletContext()
  // const [weatherinfo,errMessage] = weatherDataContext

  return (
    <>
      <div className="w-[100%]">
        <WeatherSpinner />
        {errMessage ? (
          <h1 className="text-center font-medium mt-2 text-red-600 text-sm">
            City Not Found Or Connection Interrupted
          </h1>
        ) : weatherinfo.city == undefined ? (
          <WeatherShimmerEffect />
        ) : (
          <div className="home-weather w-[100%] p-4 pl-8 flex text-black gap-4 flex-col">
            <div className="md:flex md:gap-12">
              <div className="p-3 flex flex-col justify-center">
                <p className="text-xs font-medium md:text-sm">Now</p>
                <div className="flex items-center">
                  <img
                    src={tempratureIcon}
                    alt="current temprature icon"
                    className=" w-5 md:w-8"
                  />
                  <p className="text-lg md:text-2xl font-semibold">
                    {weatherinfo.Temprature}&deg;C
                  </p>
                  <img
                    src={weatherinfo.weatherIcon}
                    alt="current weather icon"
                    className="w-14 md:w-20 border rounded-md ml-3 p-1"
                  />
                </div>
                <p className="text-sm font-semibold capitalize md:text-md">
                  {weatherinfo.weatherText}
                </p>
                <p className="text-xs font-semibold capitalize">
                  feel like : {weatherinfo.FeelLike}&deg; C
                </p>
              </div>
              <div className=" p-3 md:flex flex-col justify-center">
                <div className="flex items-start justify-start">
                  <img
                    src={locationIcon}
                    alt="location icon"
                    className="w-6 md:w-10"
                  />
                  <p className="text-xs font-semibold capitalize md:text-lg -ml-2">
                    {weatherinfo.city} , {weatherinfo.region}
                  </p>
                </div>
                <p className="text-xs md:text-center md:text-md font-semibold mt-1 ml-3 md:-mt-3 md:ml-7">
                  {weatherinfo.timeZone} ,{" "}
                  {weatherinfo.time.split("").splice(0, 10)} ,{" "}
                  {weatherinfo.time.split("").splice(10)}
                </p>
              </div>
            </div>
            <Slider {...settings} className="w-[90%] mx-auto p-1 md:p-3 md:w-[70%] md:mx-0">
              {weatherinfo.hourWeather.map((obj, ind) => {
                const time = Number(
                  obj.time.slice(10).split("")[1] +
                    obj.time.slice(10).split("")[2]
                );
                return (
                  <div key={ind}>
                    <div className="flex flex-col gap-2 w-[90%] rounded-md bg-slate-200 p-2">
                      <h5 className="font-normal text-center text-xs md:font-bold">
                        {obj.time.split("").splice(5, 5).join("")}
                      </h5>
                      <h3 className="text-center font-medium text-xs md:text-base">
                        {time > 12 ? time - 12 : time == 0 ? "12" : time}
                        {time < 12 ? " AM" : " PM"}
                      </h3>
                      <div className="flex items-center justify-center">
                        <img
                          src={obj.condition.icon}
                          alt="cloud-icon"
                          className="w-12 md:w-20"
                        />
                      </div>
                      <p className="text-center text-[8px] md:text-xs font-normal md:font-medium">
                        {obj.condition.text == "Patchy rain nearby"
                          ? "Light rain"
                          : obj.condition.text == "Light rain shower"
                          ? "Light rain"
                          : obj.condition.text == "Thundery outbreaks in nearby"
                          ? "rain"
                          : obj.condition.text ==
                            "Moderate or heavy rain shower"
                          ? "heavy rain"
                          : obj.condition.text ==
                            "Patchy light rain in area with thunder"
                          ? "ThunderStorm"
                          : obj.condition.text}
                      </p>
                    </div>
                  </div>
                );
                // time >= hours &&
                {
                  /* {time == hours && <span>Now</span>} */
                }
              })}
            </Slider>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeWeather;
