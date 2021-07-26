import React, { useState } from 'react';

function Form({ fetchData, weatherData }) {
	const [city, setCity] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		fetchData(city);
		setCity('');
	};

	const handleChange = (e) => {
		setCity(e.target.value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>City name:</label>
				<input onChange={handleChange} value={city} type="text" />
			</form>
		</div>
	);
}

export default Form;
