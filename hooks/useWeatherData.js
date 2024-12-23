import { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";

const useWeatherData = () => {
  const {
    weatherinfo,
    errMessage,
    OneDayWeather,
    tenDaysForcast,
    forecastErr,
    HandleInput,
    spinner,
    progress,
  } = useContext(WeatherContext);
  return {
    weatherinfo,
    errMessage,
    OneDayWeather,
    tenDaysForcast,
    forecastErr,
    HandleInput,
    spinner,
    progress,
  };
};
export default useWeatherData;
