const Countrylist = ({ countries, onClick }) => {
    const conditionalRender = () => {
        if (countries.length > 10) {
            return <p>Too many matches, specify another filter</p>;
        } else if (countries.length > 1) {
            return (countries.map((country) => (
                <div key={country}>
                <p key={country}>
                    <button 
                        onClick={() => onClick(country)}
                        className='show-button'
                    >
                        Show
                    </button>
                    {country}
                </p>
                </div>
            )))
        } else {
            return <p>No matches, try another filter</p>;
        }
    };
    
    return (
        <div className='country-list'>
            {conditionalRender()}
        </div>
    );
}

export default Countrylist;