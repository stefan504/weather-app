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
		<div className="form-container">
			<h2>Prognoza za slatku</h2>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="ovde kucas ime grada"
					onChange={handleChange}
					value={city}
					type="text"
				/>
			</form>
		</div>
	);
}

export default Form;
