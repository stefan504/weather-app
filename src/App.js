import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

function App() {
	const [weatherData, setWeatherData] = useState();

	const API_KEY = 'ea7cb1c3a50b1195881e3798e5a0c098';

	const fetchData = async (city) => {
		await axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
			)
			.then((res) => {
				setWeatherData(res);

				console.log(res);
			});
	};
	useEffect(() => {
		fetchData('Novi Sad');
	}, []);

	return (
		<div className="App">
			<Form weatherData={weatherData} fetchData={fetchData} />
			<Weather weatherData={weatherData} />
		</div>
	);
}

export default App;
