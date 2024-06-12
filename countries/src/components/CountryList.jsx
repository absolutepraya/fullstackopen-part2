const Countrylist = ({ countries }) => {
    const conditionalRender = () => {
        if (countries.length > 10) {
            return <p>Too many matches, specify another filter</p>;
        } else if (countries.length > 1) {
            return (countries.map((country) => (
                <p key={country}>
                    {country}
                </p>
            )))
        } else {
            return <p>No matches, try another filter</p>;
        }
    };
    
    return (
        <div>
            {conditionalRender()}
        </div>
    );
}

export default Countrylist;