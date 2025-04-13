import React, { useState, useEffect } from "react";
import "./style.css";

const sampleWeatherData = {
  city: "Philadelphia",
  currentTempC: 15,
  currentTempF: 59,
  feelsLikeC: 13,
  feelsLikeF: 55,
  description: "Partial clouds",
  iconPath: "/images/partial-clouds.png",
  hourly: [
    { hour: "9:00", tempC: 14, tempF: 57, icon: "/images/cloud.png" },
    { hour: "10:00", tempC: 16, tempF: 61, icon: "/images/sun.png" },
    { hour: "11:00", tempC: 17, tempF: 63, icon: "/images/partial-clouds.png" },
    { hour: "12:00", tempC: 14, tempF: 57, icon: "/images/rain.png" },
    { hour: "1:00", tempC: 14, tempF: 57, icon: "/images/cloud.png" },
  ],
};

const HourlyForecast = ({ hourly, isCelsius }) => (
  <div id="hourly-forecast">
    {hourly.map((item, idx) => (
      <div className="hourly-item" key={idx}>
        <span>{item.hour}</span>
        <img src={item.icon} alt="Hourly Weather Icon" />
        <span>{isCelsius ? `${item.tempC}°C` : `${item.tempF}°F`}</span>
      </div>
    ))}
  </div>
);

function App() {
  const [isCelsius, setIsCelsius] = useState(true);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    setWeatherData(sampleWeatherData);
  }, []);

  if (!weatherData) return <div>Loading...</div>;

  const {
    city,
    currentTempC,
    currentTempF,
    feelsLikeC,
    feelsLikeF,
    description,
    iconPath,
    hourly,
  } = weatherData;

  return (
    <div id="weather-container">
      <div id="image-button-wrapper">
        <button id="toggle-temp" className="button" onClick={() => setIsCelsius(!isCelsius)}>
          Switch to {isCelsius ? "°F" : "°C"}
        </button>
        <img id="weather-icon" src={iconPath} alt={description} />
      </div>
      <div id="hourly-forecast-container">
        <HourlyForecast hourly={hourly} isCelsius={isCelsius} />
      </div>
      <div id="temp-container">
        <div id="temp-div">
          <p>{isCelsius ? `${currentTempC}°C` : `${currentTempF}°F`}</p>
        </div>
        <div id="feels-like-div">
          <p>Feels like: {isCelsius ? `${feelsLikeC}°C` : `${feelsLikeF}°F`}</p>
        </div>
        <div id="weather-info">
          <p>{city}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
