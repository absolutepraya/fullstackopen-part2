import phonebookService from '../services/phonebookService';

const Persons = ({ persons, filter, setPersons }) => {
	// show person based on filter
	const showPerson = () => {
		const filteredPerson = persons.filter((person) =>
			person.name.toLowerCase().includes(filter.toLowerCase()),
		);
		return filteredPerson.map((person) => (
			<div key={person.name}>
				{person.name} {person.number + ' '}
				<button onClick={() => deletePerson(person.id)}>delete</button>
			</div>
		));
	};

	// delete person
	const deletePerson = (id) => {
		const personToDelete = persons.find((person) => person.id === id);
		// confirmation to delete person
		const confirmed = window.confirm(
			`Delete ${personToDelete.name} from phonebook?`,
		);
		if (confirmed) {
			phonebookService
				.remove(id)
				.then(() => {
					setPersons(persons.filter((person) => person.id !== id));
				})
		}
	}

	return <div>{showPerson()}</div>;
};

export default Persons;
