import React, { useEffect, useState } from 'react';
import Weather from './components/Weather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import dateFormat from 'dateformat';

const App = () => {
  const [searchContent, setSearchContent] = useState('Karachi');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "1f0cb792c4f28ea9f0f23e1330f74a98";
  const apiUrlBase =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=" +
    apiKey;

  useEffect(() => {
    const fetchWeather = async (city) => {
      try {
        const response = await fetch(apiUrlBase + '&q=' + searchContent);
        const result = await response.json();
        setWeatherData(result);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [searchContent]); 

  const formattedDate = weatherData
    ? dateFormat(weatherData.dt * 1000, "d.m.yyyy")
    : null;

    
  

  return (
    <section className="max-container">
      <div className="flex items-center justify-center p-5">
        <div className="rounded-lg bg-gray-200 p-5">
          <div className="flex">
            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <input
              type="text"
              className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0"
              placeholder="Enter City"
              value={searchContent}
              onChange={(e) => setSearchContent(e.target.value)}
            />
            <input
              type="button"
              value="Search"
              className="bg-[#161616] p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-[#161618] transition-colors cursor-pointer"
            />
          </div>
        </div>
      </div>
      {weatherData && (
        <Weather
          city={weatherData.name}
          temperature={Math.round(weatherData.main.temp)}
          desc={weatherData.weather[0].description}
          feelsLike={Math.round(weatherData.main.feels_like)}
          visibility={weatherData.visibility}
          windSpeed={Math.round(weatherData.wind.speed)}
          date={formattedDate}
        />
      )}
    </section>
  );
};

export default App;
