import { useState } from 'react';

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
	]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	// filter state
	const [filter, setFilter] = useState('');

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
		setPersons(persons.concat(newPerson));
	};

	const handleNameChange = (e) => {
		// console.log(e.target.value);
		setNewName(e.target.value);
	};

	const handleNumberChange = (e) => {
		// console.log(e.target.value);
		setNewNumber(e.target.value);
	};

	const handleFilterChange = (e) => {
		setFilter(e.target.value);
	};

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
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				filter shown with: {}
				<input 
					placeholder='input filter here'
					onChange={handleFilterChange}
				/>
			</div>

			<h2>Add a new contact</h2>
			<form onSubmit={addPerson}>
				<div>
					name: {}
					<input
						placeholder='input name here'
						onChange={handleNameChange}
					/>
				</div>
				<div>
					number: {}
					<input
						placeholder='input number here'
						onChange={handleNumberChange}
					/>
				</div>
				<br></br>
				<div>
					<button type='submit'>add</button>
				</div>
			</form>

			<h2>Numbers</h2>
			<ul>
				{showPerson()}
			</ul>
		</div>
	);
};

export default App;
