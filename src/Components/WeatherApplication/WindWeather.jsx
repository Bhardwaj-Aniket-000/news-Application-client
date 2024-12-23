import React from 'react'
import windIcon from "../../../assets/weather/wind.svg"
import windDirIcon from "../../../assets/weather/direction.svg"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { useOutletContext } from 'react-router-dom'
import WeatherShimmerEffect from './WeatherShimmerEffect'
import useWeatherData from '../../../hooks/useWeatherData';
import WeatherSpinner from './WeatherSpinner';

const WindWeather = () => {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
  };
  const {weatherinfo,errMessage} = useWeatherData()
  // const weatherDataContext = useOutletContext()
  // const [weatherinfo,errMessage] = weatherDataContext

  return (
    <>
    <WeatherSpinner />
    {errMessage ? <h1 className='text-center font-medium mt-2 text-red-600 text-sm'>City Not Found</h1> : weatherinfo.city == undefined ? <WeatherShimmerEffect /> : 
    <div className='w-[80%] p-4 pl-8 flex text-black gap-4 flex-col'>
      <div className='p-3 flex flex-col justify-center'>
        <h1 className=' text-xl font-bold text-red-700 uppercase underline'>wind</h1>
        <p className='font-semibold text-sm ml-5'>Now</p>
        <div className='flex flex-col mt-2'>
          <img src={weatherinfo.weatherIcon} alt="current weather icon" className='w-20 border rounded-md p-1'/>
          <div className='flex items-start mt-2'>
            <img src={windIcon} alt="current wind icon" className='w-12 mt-1'/>
            <p className='text-2xl font-semibold'>{weatherinfo.wind} kph ,</p>
            <img src={windDirIcon} alt="current wind direction icon" className='w-12 mr-3 mt-1'/>
            <p className='text-2xl font-semibold ml-2'>{weatherinfo.windDir}</p>
          </div>
        </div>
        <p className='text-sm font-semibold capitalize'>wind chill : {weatherinfo.windChill}&deg;C</p>
        <p className='text-sm font-semibold capitalize'>maximum wind : {weatherinfo.maxwind} kph</p>
      </div>
      <Slider {...settings} className="w-[710px] p-3">
          {weatherinfo.hourWeather.map((obj,ind) => {
              const time = Number(obj.time.slice(10).split("")[1]+obj.time.slice(10).split("")[2])
              return  (
                <div key={ind}>
                  <div className='flex flex-col gap-2 w-[90%] rounded-md bg-slate-200 p-2'>
                      <h5 className='text-center text-xs font-medium'>{obj.time.split("").splice(5,5).join("")}</h5>
                      <h3 className='text-center font-medium'>{time > 12 ? time-12 : time == 0 ? "12":time}{time < 12 ? " AM" : " PM"}</h3>
                      <div className="flex items-center justify-center">
                          <img src={obj.condition.icon} alt="wind-icon" className='w-16'/>
                      </div>
                      <div className="flex items-start justify-center">
                        <img src={windIcon} alt="wind-icon" className='w-8'/>
                        <p className="text-center text-sm font-medium">{obj.wind_kph} kph</p>
                      </div>
                      <div className='flex items-start gap-3'>
                        <img src={windDirIcon} alt="wind direction icon" className='w-6 mt-1'/>
                        <p className='text-xs'>{obj.wind_dir}</p>
                      </div>
                  </div>
                </div>
              )
              // time >= hours && 
          })}
      </Slider>
    </div>
    }
    </>
  )
}

export default WindWeather