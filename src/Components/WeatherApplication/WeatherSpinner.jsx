import React from "react";
import useWeatherData from "../../../hooks/useWeatherData";
import spinerImg from "../../../assets/feedback/spinner.svg";

const WeatherSpinner = () => {
  const { spinner } = useWeatherData();
  return (
    <div>
      {spinner && (
        <img
          src={spinerImg}
          alt="loading spinner"
          className="w-12 block mx-auto"
        />
      )}
    </div>
  );
};

export default WeatherSpinner;
