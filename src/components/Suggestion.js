import React from 'react';

function Suggestion({ fetchData }) {
	const handleClick = (grad) => {
		fetchData(grad);
	};
	return (
		<div className="suggestion-container">
			<h2>Verovatno ces traziti:</h2>
			<div className="search-container">
				<div onClick={() => handleClick('Novi Sad')} className="search">
					<h4>Novi Sad</h4>
				</div>

				<div onClick={() => handleClick('Zabalj')} className="search">
					<h4>Zabalj</h4>
				</div>

				<div onClick={() => handleClick('Temerin')} className="search">
					<h4>Temerin</h4>
				</div>

				<div onClick={() => handleClick('Zrenjanin')} className="search">
					<h4>Zrenjanin</h4>
				</div>

				<div onClick={() => handleClick('Beograd')} className="search">
					<h4>Beograd</h4>
				</div>
			</div>
		</div>
	);
}

export default Suggestion;
