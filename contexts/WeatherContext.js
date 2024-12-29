import { createContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [OneDayWeather, setOneDayWeather] = useState();
  const [weatherinfo, setweatherinfo] = useState({ city: undefined });
  const [getInput, setgetInput] = useState();
  const [errMessage, setErrMessage] = useState(false);
  const [forecastErr, setForecastErr] = useState(false);
  const [tenDaysForcast, setTenDaysForcast] = useState();
  const [spinner, setSpinner] = useState(false);
  const [progress, setProgress] = useState(false);

  const HandleInput = (value) => {
    setgetInput(value);
    setTenDaysForcast();
    setweatherinfo({ city: undefined });
  };

  useEffect(() => {
    setProgress(10);
    setSpinner(true);
    setProgress(30);
    const url = `https://api.weatherapi.com/v1/forecast.json?key=0c0289607e764f3f883100440242812&q=${
      getInput ?? "chandigarh"
    }&days=10`;
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "x-rapidapi-key": "a23bfcd749msheab360a7f47b447p169793jsnaa4b28a51c77",
    //     "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    //   },
    // };
    fetch(url)
      .then((res) => {
        setProgress(50);
        setErrMessage("still wait");
        return res.json();
      })
      .then((data) => {
        setProgress(70);
        setOneDayWeather(data.forecast.forecastday[0].hour);
        setErrMessage(null);
        setweatherinfo({
          lat: data.location.lat,
          long: data.location.lon,
          city: data.location.name,
          region: data.location.region,
          time: data.location.localtime,
          timeZone: data.location.tz_id,
          weatherText: data.current.condition.text,
          weatherIcon: data.current.condition.icon,
          Temprature: data.current.temp_c,
          FeelLike: data.current.feelslike_c,
          maxTemp: data.forecast.forecastday[0].day.maxtemp_c,
          minTemp: data.forecast.forecastday[0].day.mintemp_c,
          dailyweathertext: data.forecast.forecastday[0].day.condition.text,
          dailyweathericon: data.forecast.forecastday[0].day.condition.icon,
          avg_temp: data.forecast.forecastday[0].day.avgtemp_c,
          avg_humidity: data.forecast.forecastday[0].day.avghumidity,
          Humidity: data.current.humidity,
          Cloud: data.current.cloud,
          currentPrecip: data.current.precip_mm,
          currentPrecipIN: data.current.precip_in,
          wind: data.current.wind_kph,
          windDir: data.current.wind_dir,
          windChill: data.current.windchill_c,
          maxwind: data.forecast.forecastday[0].day.maxwind_kph,
          fullDayPrecip: data.forecast.forecastday[0].day.totalprecip_mm,
          fullDayPrecipIN: data.forecast.forecastday[0].day.totalprecip_in,
          daily_chance_of_rain:
            data.forecast.forecastday[0].day.daily_chance_of_rain,
          daily_will_it_rain:
            data.forecast.forecastday[0].day.daily_will_it_rain,
          is_day: data.current.is_day,
          sunrise: data.forecast.forecastday[0].astro.sunrise,
          sunset: data.forecast.forecastday[0].astro.sunset,
          moonrise: data.forecast.forecastday[0].astro.moonrise,
          moonset: data.forecast.forecastday[0].astro.moonset,
          hourWeather: data.forecast.forecastday[0].hour.concat(
            data.forecast.forecastday[1].hour
          ),
        });
        setSpinner(false);
        setProgress(100);
      })
      .catch((err) => {
        setErrMessage(!errMessage);
        setSpinner(false);
        setProgress(100);
      });
  }, [getInput]);

  useEffect(() => {
    setProgress(10);
    setSpinner(true);
    setProgress(30);
    fetch(
      `https://api.open-meteo.com/v1/forecast?forecast_days=16&latitude=${
        weatherinfo.lat ?? 30.73
      }&longitude=${
        weatherinfo.long ?? 76.78
      }&daily=apparent_temperature_max,apparent_temperature_min,weather_code,wind_speed_10m_max,precipitation_sum`
    )
      .then((res) => {
        setProgress(50);
        return res.json();
      })
      .then((data) => {
        setProgress(70);
        setTenDaysForcast(data.daily);
        setSpinner(false);
        setProgress(100);
      })
      .catch((err) => {
        setForecastErr(!forecastErr);
        setSpinner(false);
        setProgress(100);
      });
  }, [weatherinfo.city]);

  return (
    <>
      <WeatherContext.Provider
        value={{
          weatherinfo,
          errMessage,
          OneDayWeather,
          tenDaysForcast,
          forecastErr,
          HandleInput,
          spinner,
          progress,
        }}
      >
        {children}
      </WeatherContext.Provider>
    </>
  );
};

export default WeatherContext;
