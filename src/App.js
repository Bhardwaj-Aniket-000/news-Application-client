import React from "react";
import { NewsProvider } from "../contexts/NewsContext";
import { SportsProvider } from "../contexts/SportsContext";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";
import { FeedbackProvider } from "../contexts/FeedbackContext";
import { WeatherProvider } from "../contexts/WeatherContext";
import FilterComponent from "../hooks/useFilter";

const App = () => {
  return (
    <>
      <NewsProvider>
        <SportsProvider>
          <FeedbackProvider>
            <WeatherProvider>
              <div className="flex flex-col min-h-full max-w-[1500px] mx-auto">
                <Header />
                <Navbar />
                <main>
                  <Outlet />
                </main>
                {/* <Footer /> */}
              </div>
            </WeatherProvider>
          </FeedbackProvider>
        </SportsProvider>
      </NewsProvider>
    </>
  );
};

export default App;
