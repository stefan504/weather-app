import React from 'react';

function Weather({ weatherData }) {
	if (weatherData) {
		return (
			<div className="weatherContainer">
				<h2>{weatherData.data.name}</h2>
				<h3>{weatherData.data.weather[0].main}</h3>
				<img
					src={`http://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`}
					alt=""
				/>
				<h3>{(weatherData.data.main.temp - 273.15).toFixed()}°C</h3>
				<div className="minmax">
					<h5>
						{(weatherData.data.main.temp_min - 273.15).toFixed()}°C /{' '}
						{(weatherData.data.main.temp_max - 273.15).toFixed()}°C
					</h5>
				</div>
			</div>
		);
	} else {
		return <p>Ucitavam...</p>;
	}
}

export default Weather;
