import phonebookService from '../services/phonebookService';

const PersonForm = ({
	persons,
	newName,
	newNumber,
	setPersons,
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
		if (
			persons.find(
				(person) => person.name.toLowerCase() === newName.toLowerCase()
			) // case insensitive
		) {
			// confirmation
			const confirmation = window.confirm(
				`${newName} is already added to the phonebook, replace the old number with a new one?`
			);
			if (!confirmation) {
				return;
			}
			// update the number of the person
			const person = persons.find(
				(person) => person.name.toLowerCase() === newName.toLowerCase()
			); // case insensitive
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
		// check if the number already exists
		if (persons.find((person) => person.number == newNumber)) {
			alert(
				`${newNumber} is the number of another person in the phonebook`
			);
			return;
		}
		const newPerson = {
			name: newName,
			number: newNumber,
			id: (persons.length + 1).toString(),
		};
		// add new persons to the json server
		phonebookService.add(newPerson).then((newPersonResponse) => {
			setPersons(persons.concat(newPersonResponse));
		});
	};

	return (
		<form
			name='add-number'
			onSubmit={addPerson}
		>
			<div>
				name:{' '}
				<input
					name='name'
					onChange={handleNameChange}
					placeholder='input name here'
				/>
			</div>
			<div>
				number:{' '}
				<input
					name='number'
					onChange={handleNumberChange}
					placeholder='input number here'
				/>
			</div>
			<br></br>
			<div>
				<button type='submit'>add</button>
			</div>
		</form>
	);
};

export default PersonForm;
