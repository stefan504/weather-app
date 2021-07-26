import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const API_KEY = 'ea7cb1c3a50b1195881e3798e5a0c098';

	useEffect(() => {
		const fetchData = () => {
			axios
				.get(
					`api.openweathermap.org/data/2.5/weather?q=belgrade&appid=${API_KEY}`
				)
				.then((res) => {
					console.log(res);
				});
		};
		fetchData();
	});

	return <div className="App">yo</div>;
}

export default App;
