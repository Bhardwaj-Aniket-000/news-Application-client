import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tempratureIcon from "../../../assets/weather/hightemp-svg.svg";
import precipIcon from "../../../assets/weather/precip.svg";
import locationIcon from "../../../assets/weather/location.svg";
import windIcon from "../../../assets/weather/wind.svg";
import sunny from "../../../assets/weather/sunny.png";
import haze from "../../../assets/weather/haze2.png";
import partlyCloudy from "../../../assets/weather/partlyCloudy.png";
import raining from "../../../assets/weather/drizzle.png";
import thunderstorm from "../../../assets/weather/thunderstorm.png";
import scatteredThunderstorm from "../../../assets/weather/scattered-thunderstorms.png";
import drizzle from "../../../assets/weather/scatteredRaining.png";
// import { useOutletContext } from 'react-router-dom';
import WeatherShimmerEffect from "./WeatherShimmerEffect";
import useWeatherData from "../../../hooks/useWeatherData";
import WeatherSpinner from "./WeatherSpinner";

const HourlyWeather = ({ time, obj }) => {
  let hours = new Date().getHours();
  // hours = 10

  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  const { weatherinfo, errMessage, tenDaysForcast, forecastErr } =
    useWeatherData();
  // const weatherDataContext = useOutletContext()
  // const [weatherinfo,errMessage,,tenDaysForcast,forecastErr] = weatherDataContext

  function createArrayOfObject(data) {
    if (!data) {
      return [];
    }
    return data.time.map((time, index) => {
      const obj2 = {
        time,
        apparent_temperature_max: data.apparent_temperature_max[index],
        apparent_temperature_min: data.apparent_temperature_min[index],
        precipitation_sum: data.precipitation_sum[index],
        weather_code: data.weather_code[index],
        wind_speed_10m_max: data.wind_speed_10m_max[index],
      };
      return obj2;
    });
  }
  const response = createArrayOfObject(tenDaysForcast);

  return (
    <>
      <div className="w-[100%] p-3 flex flex-col justify-center gap-3">
        <WeatherSpinner />
        {errMessage ? (
          <h1 className="text-center font-medium mt-2 text-red-600 text-sm">
            City Not Found Or No Internet
          </h1>
        ) : weatherinfo.city == undefined ? (
          <WeatherShimmerEffect />
        ) : (
          <div className="flex gap-12">
            <div className="p-3 flex flex-col justify-center">
              <p className="font-medium text-sm">Now</p>
              <div className="flex items-center">
                <img
                  src={tempratureIcon}
                  alt="current temprature icon"
                  className="w-8"
                />
                <p className="text-2xl font-semibold">
                  {weatherinfo.Temprature}&deg;C
                </p>
                <img
                  src={weatherinfo.weatherIcon}
                  alt="current weather icon"
                  className="w-20 border rounded-md ml-3 p-1"
                />
              </div>
              <p className="font-semibold capitalize text-sm">
                {weatherinfo.weatherText}
              </p>
              <p className="text-xs font-semibold capitalize">
                feel like : {weatherinfo.FeelLike}&deg; C
              </p>
            </div>
            <div className="p-3 flex flex-col justify-center">
              <div className="flex items-start justify-start">
                <img
                  src={locationIcon}
                  alt="location icon"
                  className="w-10 mt-1"
                />
                <p className="font-medium capitalize text-lg -ml-2">
                  {weatherinfo.city} , {weatherinfo.region}
                </p>
              </div>
              <p className="text-center text-md font-medium -mt-4 ml-7">
                {weatherinfo.timeZone} ,{" "}
                {weatherinfo.time.split("").splice(0, 10)} ,{" "}
                {weatherinfo.time.split("").splice(10)}
              </p>
            </div>
          </div>
        )}
        {forecastErr || errMessage ? (
          <h1 className="text-center font-medium mt-2 text-red-600 text-sm">
            Can't Get 16 Days Forecast
          </h1>
        ) : response.length == 0 ? (
          <WeatherShimmerEffect />
        ) : (
          <Slider {...settings} className="p-3 w-[70%] my-8">
            {response.map((obj, ind) => {
              return (
                <div key={ind} className="h-52">
                  <div className="flex flex-col gap-2 w-[90%] h-52 rounded-md bg-slate-200 p-2 py-4">
                    <h5 className="text-center text-xs font-bold mb-1">
                      {obj.time}
                    </h5>
                    <div className="flex items-center justify-center w-28 h-24">
                      {obj.weather_code == 0 && (
                        <img
                          src={sunny}
                          alt="daily-weather-icon"
                          className="w-16"
                        />
                      )}
                      {obj.weather_code > 0 && obj.weather_code < 10 && (
                        <img
                          src={partlyCloudy}
                          alt="daily-weather-icon"
                          className="w-14"
                        />
                      )}
                      {obj.weather_code >= 50 && obj.weather_code < 60 && (
                        <img
                          src={drizzle}
                          alt="daily-weather-icon"
                          className="w-16"
                        />
                      )}
                      {obj.weather_code >= 40 && obj.weather_code < 50 && (
                        <img
                          src={haze}
                          alt="daily-weather-icon"
                          className="w-10"
                        />
                      )}
                      {obj.weather_code >= 60 && obj.weather_code < 70 && (
                        <img
                          src={raining}
                          alt="daily-weather-icon"
                          className="w-16"
                        />
                      )}
                      {obj.weather_code >= 70 && obj.weather_code < 80 && (
                        <img
                          src={scatteredThunderstorm}
                          alt="daily-weather-icon"
                          className="w-16"
                        />
                      )}
                      {obj.weather_code >= 80 && obj.weather_code < 90 && (
                        <img
                          src={thunderstorm}
                          alt="daily-weather-icon"
                          className="w-10"
                        />
                      )}
                      {obj.weather_code >= 90 && obj.weather_code < 100 && (
                        <img
                          src={thunderstorm}
                          alt="daily-weather-icon"
                          className="w-10"
                        />
                      )}
                    </div>
                    <p className="text-center text-xs font-semibold flex items-center mx-auto">
                      <img
                        src={precipIcon}
                        alt="precipitation-icon"
                        className="w-6"
                      />
                      <span className="ml-4">{obj.precipitation_sum} mm</span>
                    </p>
                    <p className="text-center text-xs font-bold flex items-center mx-auto">
                      <img
                        src={tempratureIcon}
                        alt="temprature icon"
                        className="w-6"
                      />
                      <span>
                        {" "}
                        {obj.apparent_temperature_max}&deg;C ,{" "}
                        {obj.apparent_temperature_min}&deg;C
                      </span>
                    </p>
                    <p className="text-center text-xs font-semibold flex items-start mx-auto">
                      <img
                        src={windIcon}
                        alt="precipitation-icon"
                        className="w-6"
                      />
                      <span className="ml2">{obj.wind_speed_10m_max} kph</span>
                    </p>
                  </div>
                </div>
              );
              // time >= hours &&
            })}
          </Slider>
        )}
      </div>
    </>
  );
};

export default HourlyWeather;
