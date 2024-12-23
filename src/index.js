import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Sports from "./Components/NavLinksComponents/Sports";
import ErrorPage from "./Components/ErrorPage";
import CardApidata from "./Components/CardApidata";
import Tech from "./Components/NavLinksComponents/Tech";
import WeatherApplication from "./Components/WeatherApplication/WeatherApplication";
import CurrentWeather from "./Components/WeatherApplication/CurrentWeather";
import Astro from "./Components/WeatherApplication/Astro";
import HourlyWeather from "./Components/WeatherApplication/10DaysForcast";
import WindWeather from "./Components/WeatherApplication/WindWeather";
import Temprature from "./Components/WeatherApplication/Temprature";
import Precipitaion from "./Components/WeatherApplication/Precipitaion";
import Rain from "./Components/WeatherApplication/Rain";
import Cloud from "./Components/WeatherApplication/Cloud";
import Humidity from "./Components/WeatherApplication/Humidity";
import Feedback from "./Components/Feedback/MainFeedback";
import UserAuth from "./Components/Feedback/UserAuth";
import LoginAlert from "./Components/Feedback/LoginAlert";
import FeedbackForm from "./Components/Feedback/FeedbackForm";
import Ownfeedbacks from "./Components/Feedback/Ownfeedbacks";

const root = ReactDOM.createRoot(document.querySelector("#root"));

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App />,
// 		errorElement: <ErrorPage />,
// 		children: [
// 			{
// 				path: "",
// 				element: <CardApidata />,
// 			},
// 			{
// 				path: "tech",
// 				element: <Tech />,
// 			},
// 			{
// 				path: "indian-primier-leauge",
// 				element: <IPL />,
// 			},
// 			{
// 				path: "fashion",
// 				element: <Fashion />,
// 			},
// 			{
// 				path: "world",
// 				element: <WorldNews />,
// 			},
// 			{
// 				path: "sports",
// 				element: <Sports />,
// 				// children: [{ path: "ipl", element: <IPL /> },{ path: "cricket", element: <Cricket /> }],
// 			},
// 			{
// 				path: "travel",
// 				element: <Travel />,
// 			},
// 			{
// 				path: "health",
// 				element: <Health />,
// 			},
// 			{
// 				path: "blog",
// 				element: <Blog />,
// 			},
// 			{
// 				path: "crime",
// 				element: <Crime />,
// 			},
// 			{
// 				path: "politics",
// 				element: <Politics />,
// 			},
// 			{
// 				path: "cricket",
// 				element: <Cricket />,
// 			},
// 			{
// 				path: "newsharyana",
// 				element: <HaryanaNews />,
// 			},
// 			{
// 				path: "profile",
// 				element: <Profile />,
// 				children: [
// 					{
// 						path: "settings",
// 						element: <h1>user Profile settings</h1>,
// 					},
// 					{
// 						path: "info",
// 						element: <h1>user Profile info</h1>,
// 					},
// 				],
// 			},
// 		],
// 	},
// ]);

const router2 = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<CardApidata />} />
      <Route path="tech" element={<Tech />}>
        <Route path=":link" element={<Tech />} />
      </Route>
      <Route path="sports" element={<Sports />}>
        <Route path=":link" element={<Sports />} />
      </Route>
      <Route path="forcast" element={<WeatherApplication />}>
        <Route path="" element={<CurrentWeather />} />
        <Route path="astro" element={<Astro />} />
        <Route path="16-days-forcast" element={<HourlyWeather />} />
        <Route path="wind" element={<WindWeather />} />
        <Route path="temprature" element={<Temprature />} />
        <Route path="precipitaion" element={<Precipitaion />} />
        <Route path="rain" element={<Rain />} />
        <Route path="cloud" element={<Cloud />} />
        <Route path="humidity" element={<Humidity />} />
      </Route>
      <Route path="feedbackAuth" element={<Feedback />}>
        <Route path="" element={<UserAuth />} />
        <Route path="login" element={<LoginAlert />} />
        <Route path="sendfeedback" element={<FeedbackForm />} />
      </Route>
      <Route path="feedbackAuth/ownfeedbacks" element={<Ownfeedbacks />} />
      <Route path=":newsTitle" element={<CardApidata />} />
    </Route>
  )
);

root.render(<RouterProvider router={router2} />);

// const url = "https://yahoo-weather5.p.rapidapi.com/weather?location=cherapunji&format=json&u=c";
// const options = {
// 	method: "GET",
// 	headers: {
// 		"x-rapidapi-key": "a23bfcd749msheab360a7f47b447p169793jsnaa4b28a51c77",
// 		"x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
// 	},
// };

// const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=cherapunji&days=10`;
// const options = {
// 	method: "GET",
// 	headers: {
// 		"x-rapidapi-key": "a23bfcd749msheab360a7f47b447p169793jsnaa4b28a51c77",
// 		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
// 	},
// };

// const url = 'https://open-weather13.p.rapidapi.com/city/fivedaysforcast/30.438/-89.1028';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'a23bfcd749msheab360a7f47b447p169793jsnaa4b28a51c77',
// 		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
// 	}
// };

// 10 days forcast...........
// const url = 'https://weather-forecast-14-days.p.rapidapi.com/v2.0/forecast/daily?LON=-0.6&LAT=51.5&LANG=en';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'a23bfcd749msheab360a7f47b447p169793jsnaa4b28a51c77',
// 		'x-rapidapi-host': 'weather-forecast-14-days.p.rapidapi.com'
// 	}
// };

// fetch(url, options)
// 	.then((res) => res.json())
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// open source api for weather unlimited request
// fetch("https://api.open-meteo.com/v1/forecast?forecast_days=16&latitude=25.28&longitude=91.72&daily=apparent_temperature_max,apparent_temperature_min,rain_sum,weather_code,precipitation_hours,precipitation_sum")
// 	.then((res) => {
// 		return res.json();
// 	})
// 	.then((data) => {
// 		console.log("open data is ", data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
