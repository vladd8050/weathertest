import React, {useState} from 'react';
import axios from 'axios';
import is from 'is_js';
import './App.css';

import {CountryData} from './components/CountryData'
import {WeatherData} from './components/WeatherData'

function App() {
  const [countryData, setCountryData] = useState()
  const [country, setCountry] = useState()
  const [weatherData, setWeatherData] = useState()

  const handleCountryInputChange = (e) => {
     console.log(e.target.value)
     setCountry(e.target.value)
  }

  const handleClick = async () => {
    try {
      const result = await axios(`https://restcountries.eu/rest/v2/name/${country}`)
      if (result.data) {
        setCountryData(is.array(result.data) ? result.data[0] : result.data)
      }
    } catch(e) {

    }
  }

  const handleGetWeather = async () => {
    try {
      const result = await axios(`http://api.weatherstack.com/current?access_key=85d2786f3be1cf46a0d68b5e473dbe56&query=${countryData.capital}`)
      setWeatherData(result.data)
    } catch(e) {}
  }

  return (
    <div className="App">
      {!countryData && (
        <div>
          <input placeholder="Enter Country" type="text" onChange={handleCountryInputChange} value={country}/>
          <button onClick={handleClick}>Search</button>
        </div>
      )}
      {countryData && (
        <>
         <CountryData countryData={countryData}>
            <button onClick={handleGetWeather}>Capital Weather</button>
         </CountryData>
         {weatherData && weatherData.current && (
            <WeatherData weatherData={weatherData}/>
         )}
        </>
      )}
    </div>
  );
}

export default App;
