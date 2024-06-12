import { useState, useEffect } from 'react';
import axios from 'axios';

import CountryInfo from './components/CountryInfo';

const App = () => {
	const [countries, setCountries] = useState([]);
	const [countryInput, setCountryInput] = useState('');
	const [countryInfo, setCountryInfo] = useState(null);

	const urlAll = 'https://studies.cs.helsinki.fi/restcountries/api/all';
	const url = `https://studies.cs.helsinki.fi/restcountries/api/name/${countryInput}`;

	useEffect(() => {
		getCountries();
	}, [countryInput]);

	useEffect(() => {
		// if the input is empty, do nothing
		if (countryInput === '') {
			setCountryInfo(null);
			return;
		}

		axios
			.get(url)
			.then((response) => {
				setCountryInfo(response.data);
			})
			.catch((error) => {
				console.log(error);
				setCountryInfo(null);
			});
	}, [countryInput, url]);

	// get country choice from input
	const getCountries = () => {
		axios.get(urlAll).then((response) => {
			const countriesName = response.data
				.filter((country) =>
					country.name.common
						.toLowerCase()
						.includes(countryInput.toLowerCase())
				)
				.map((country) => country.name.common);
			setCountries(countriesName);
		});
	};

	// show countries list
	const showCountries = () => {
		if (countryInput === '') {
			return null;
		}
		if (countries.length > 10) {
			return <p>Too many matches, specify another filter</p>;
		}
		return countries.map((country) => <p key={country}>{country}</p>);
	};

	const handleCountryInputChange = (event) => {
		setCountryInput(event.target.value);
	};

	return (
		<div>
			<h1>Countries</h1>
			<div>
				<p>Find countries:</p>
				<input
					value={countryInput}
					onChange={handleCountryInputChange}
					placeholder='Input country here...'
				/>
			</div>
			<CountryInfo countryInfo={countryInfo} showCountries={showCountries()} />
		</div>
	);
};

export default App;
