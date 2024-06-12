import { useEffect, useState } from 'react';
import axios from 'axios';

const api_key = import.meta.env.VITE_SOME_KEY

const CountryInfo = ({ countryInfo }) => {
    const [weather, setWeather] = useState({});

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${(countryInfo.capital)[0]}&appid=${api_key}&units=metric`)
            .then((response) => {
                console.log(response.data);
                const weatherData = response.data;
                console.log(weatherData.weather);
                setWeather(weatherData);
            });
    }, [countryInfo.capital]);

    return ( 
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
            <p>
                <strong>Weather in {(countryInfo.capital)[0]}</strong>
            </p>
            {weather.weather && weather.main && weather.wind && (
            <>
                <p className='weathertext-top'>
                    Today{'\''}s weather is {weather.weather[0].main.toLowerCase()} ({weather.weather[0].description})<br />
                    with temperature {weather.main.temp}°C ({weather.main.temp_min}°C - {weather.main.temp_max}°C)
                </p>
                <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].description}
                    className='weather-icon'
                />
                <p className='weathertext-bottom'>
                    Wind speed: {weather.wind.speed} m/s
                </p>
            </>
            )}
        </div>
    );
};

export default CountryInfo;