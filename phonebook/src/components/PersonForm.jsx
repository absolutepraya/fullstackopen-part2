import axios from 'axios';

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
		// check if person already exists
		if (persons.find((person) => person.name == newName)) {
			alert(`${newName} is already added to phonebook`);
			return;
		}
		// check if the number already exists
		if (persons.find((person) => person.number == newNumber)) {
			alert(
				`${newNumber} is the number of another person in the phonebook`
			);
			return;
		}
		const newPerson = { name: newName, number: newNumber };
		// add new persons to the json server
		axios
			.post('http://localhost:3001/persons', newPerson)
			.then((response) => {
				setPersons(persons.concat(response.data));
			});
	};

	return (
		<form onSubmit={addPerson}>
			<div>
				name:{' '}
				<input
					onChange={handleNameChange}
					placeholder='input name here'
				/>
			</div>
			<div>
				number:{' '}
				<input
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
