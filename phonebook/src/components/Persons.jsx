import phonebookService from '../services/phonebookService';

const Persons = ({ persons, filter, setPersons, setMessage }) => {
	// show person based on filter
	const showPerson = () => {
		const filteredPerson = persons.filter((person) =>
			person.name.toLowerCase().includes(filter.toLowerCase())
		);
        return (
            <table>
                <tbody>
                    {filteredPerson.map((person) => (
                        <tr key={person.name}>
                            <td>{person.name}</td>
                            <td>{person.number}</td>
                            <td>
                                <button
                                    onClick={() => deletePerson(person.id)}
                                    className='delete-btn'
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
	};

	// delete person
	const deletePerson = (id) => {
		const personToDelete = persons.find((person) => person.id === id);
		// confirmation to delete person
		const confirmation = window.confirm(
			`Delete ${personToDelete.name} from phonebook?`
		);
		if (confirmation) {
			phonebookService.remove(id).then(() => {
				setPersons(persons.filter((person) => person.id !== id));
			});
			// set message
			setMessage(`Removed ${personToDelete.name}`);
			// set timeout to clear the message
			setTimeout(() => {
				setMessage(null);
			}, 5000);
		}
	};

	return <div>{showPerson()}</div>;
};

export default Persons;
