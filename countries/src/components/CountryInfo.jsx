const CountryInfo = ({ countryInfo, showCountries }) => {
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
        <div>{showCountries}</div>
    );
};

export default CountryInfo;