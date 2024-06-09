import { useState } from 'react';

const App = () => {
	const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456'}]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');

	const addPerson = e => {
		e.preventDefault();
		// check if person already exists
		if (persons.find(person => person.name == newName)) {
			alert(`${newName} is already added to phonebook`);
			return;
		}
		// check if the number already exists
		if (persons.find(person => person.number == newNumber)) {
			alert(`${newNumber} is the number of another person in the phonebook`);
			return;
		}
		const newPerson = { name: newName, number: newNumber };
		setPersons(persons.concat(newPerson));
	}

	const handleNameChange = e => {
		// console.log(e.target.value);
		setNewName(e.target.value);
	}

	const handleNumberChange = e => {
		// console.log(e.target.value);
		setNewNumber(e.target.value);
	}

	return (
		<div>

			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input placeholder='input name here' onChange={handleNameChange}/>
				</div>
				<div>
					number: <input placeholder='input number here' onChange={handleNumberChange}/>
				</div>
				<div>
					<button type='submit'>add</button>
				</div>
			</form>
			
			<h2>Numbers</h2>
			<ul>
				{persons.map((person) => (
					<li key={person.name}>
						{person.name} {person.number}
					</li>
				))}
			</ul>

		</div>
	);
};

export default App;
