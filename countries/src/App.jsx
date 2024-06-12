import { useState, useEffect } from 'react';
import axios from 'axios';

import CountryInfo from './components/CountryInfo';
import CountryList from './components/CountryList';

const App = () => {
	const [countries, setCountries] = useState([]);
	const [countriesNames, setCountriesNames] = useState([]);
	const [search, setSearch] = useState('');
	const [filteredCountries, setFilteredCountries] = useState([]);

	useEffect(() => {
		axios
			.get('https://studies.cs.helsinki.fi/restcountries/api/all')
			.then((response) => {
				setCountries(response.data);
			});
	}, []);

	useEffect(() => {
		const names = countries.map((country) => country.name.common);
		setCountriesNames(names);
	}, [countries])

	useEffect(() => {
		if (search.length !== 0) {
			const countriesShown = countriesNames.filter((countryName) => countryName.toLowerCase().includes(search.toLowerCase()));
		setFilteredCountries(countriesShown);
		}
	}, [search, countriesNames]);

	const handleSearchChange = (e) => {
		setSearch(e.target.value);
	};

	const handleShowClick = (country) => {
		setSearch(country);
	}

	if (filteredCountries.length === 1) {
		const country = countries.find((countryx) => countryx.name.common.toLowerCase() == (filteredCountries[0].toLowerCase()));
		return (
			<div>
			<h1>Countries</h1>
			<div>
				<p>Find countries:</p>
				<input
					value={search}
					onChange={handleSearchChange}
					placeholder='Input country here...'
				/>
			</div>
			<CountryInfo countryInfo={country} />
			</div>
		);
	} else {
		return (
			<div>
			<h1>Countries Data</h1>
			<div>
				<p>Find countries:</p>
				<input
					value={search}
					onChange={handleSearchChange}
					placeholder='Input country here...'
				/>
			</div>
			<CountryList 
				countries={filteredCountries}
				onClick={handleShowClick} 
			/>
			</div>
		)
	}
};

export default App;
