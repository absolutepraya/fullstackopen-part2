const Persons = ({ persons, filter }) => {
	// show person based on filter
	const showPerson = () => {
		let filteredPerson = persons.filter((person) =>
			person.name.toLowerCase().includes(filter.toLowerCase())
		);
		return filteredPerson.map((person) => (
			<li key={person.name}>
				{person.name} {person.number}
			</li>
		));
	};

	return <ul>{showPerson()}</ul>;
};

export default Persons;
