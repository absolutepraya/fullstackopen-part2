import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
	const [countries, setCountries] = useState([]);
	const [countryInput, setCountryInput] = useState('');
	const [countryInfo, setCountryInfo] = useState(null);
	const [allCountries, setAllCountries] = useState([]);

	const urlAll = 'https://studies.cs.helsinki.fi/restcountries/api/all';
	const url = `https://studies.cs.helsinki.fi/restcountries/api/name/${countryInput}`;

	useEffect(() => {
		axios.get(urlAll).then((response) => {
			const countriesAll = response.data.map(
				(country) => country.name.common
			);
			setAllCountries(countriesAll);
		});
	});

	useEffect(() => {
		getCountries();
	}, [countryInput]);

	useEffect(() => {
		// if the input is empty, do nothing
		if (countryInput === '') {
			setCountryInfo(null);
			return;
		}

		// if the input does not match any country whole name, do nothing
		for (let country of allCountries) {
			if (country.toLowerCase() === countryInput.toLowerCase()) {
				break;
			}
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

	const showCountryInfo = (countryInfo) => {
		return countryInfo ? (
			<div>
				<h2>{countryInfo.name.common}</h2>
				<p className='official-name'>({countryInfo.name.official})</p>
				<table>
					<tbody>
						<tr>
							<td className='info-col'>
								<strong>Capital:</strong>
							</td>
							<td className='value-col'>
								{countryInfo.capital.map((capital, index) => (
									<div key={index}>{capital}</div>
								))}
							</td>
						</tr>
						<tr>
							<td className='info-col'>
								<strong>Population:</strong>
							</td>
							<td className='value-col'>
								<div>{countryInfo.population}</div>
							</td>
						</tr>
						<tr>
							<td className='info-col'>
								<strong>Currency:</strong>
							</td>
							<td className='value-col'>
								{Object.values(countryInfo.currencies).map(
									(currency, index) => (
										<div key={index}>
											{currency.name} ({currency.symbol})
										</div>
									)
								)}
							</td>
						</tr>
						<tr>
							<td className='info-col'>
								<strong>Languages:</strong>
							</td>
							<td className='value-col'>
								{Object.values(countryInfo.languages).map(
									(language, index) => (
										<div
											key={index}
											style={{ textAlign: 'right' }}
										>
											{language}
										</div>
									)
								)}
							</td>
						</tr>
					</tbody>
				</table>
				<p>
					<strong>Flag</strong>
				</p>
				<img
					src={countryInfo.flags.png}
					alt={countryInfo.name.common}
					style={{ width: 150 }}
				/>
			</div>
		) : (
			<div>{showCountries()}</div>
		);
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
			<div>{showCountryInfo(countryInfo)}</div>
		</div>
	);
};

export default App;
