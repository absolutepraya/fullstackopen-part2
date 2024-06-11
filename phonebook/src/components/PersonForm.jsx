import phonebookService from '../services/phonebookService';

const PersonForm = ({
	persons,
	newName,
	newNumber,
	setPersons,
	setMessage,
	handleNameChange,
	handleNumberChange,
}) => {
	// add person to the phonebook
	const addPerson = (e) => {
		e.preventDefault();
		// extra: check if name or number is empty
		if (newName === '' || newNumber === '') {
			alert('name or number is empty');
			return;
		}
		// check if person already exists
		const person = persons.find((person) => person.name === newName);
		if (person) {
			// check if the number is the same
			if (person.number === newNumber) {
				alert(
					`${newName} is already added to the phonebook with the same number`
				);
				return;
			}
			// confirmation
			const confirmation = window.confirm(
				`${newName} is already added to the phonebook, replace the old number with a new one?`
			);
			if (!confirmation) {
				return;
			}
			// update the number of the person
			const updatedPerson = { ...person, number: newNumber };
			phonebookService
				.update(person.id, updatedPerson)
				.then((updatedPersonResponse) => {
					setPersons(
						persons.map((person) =>
							person.id !== updatedPersonResponse.id
								? person
								: updatedPersonResponse
						)
					);
				});
			return;
		}
		// find the highest id
		const maxId = Math.max(...persons.map((person) => person.id));
		const newPerson = {
			name: newName,
			number: newNumber,
			id: (maxId + 1).toString(),
		};
		// add new persons to the json server
		phonebookService.add(newPerson).then((newPersonResponse) => {
			setPersons(persons.concat(newPersonResponse));
		});
		// set message
		setMessage(`Added ${newName}`);
		// set timeout to clear the message
		setTimeout(() => {
			setMessage(null);
		}, 5000);
	};

	return (
		<form onSubmit={addPerson}>
        <table>
            <tbody>
                <tr>
                    <td>Name:</td>
                    <td>
                        <input
                            className = 'text-input'
                            onChange={handleNameChange}
                            placeholder='Input name here'
                        />
                    </td>
                </tr>
                <tr>
                    <td>Number:</td>
                    <td>
                        <input
                            className = 'text-input'
                            onChange={handleNumberChange}
                            placeholder='Input number here'
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan='2' style={{textAlign: 'right'}}>
                        <button type='submit' className='add-btn'>
                            Add
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
	);
};

export default PersonForm;
