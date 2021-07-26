import React from 'react';

function Weather({ weatherData }) {
	if (weatherData) {
		return (
			<div className="weatherContainer">
				<h2>{weatherData.data.name}</h2>
				<h3>{weatherData.data.weather[0].description}</h3>
				<img
					src={`http://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`}
					alt=""
				/>
				<h4>{(weatherData.data.main.temp - 273.15).toFixed()}°C</h4>
			</div>
		);
	} else {
		return 'Loading...';
	}
}

export default Weather;
