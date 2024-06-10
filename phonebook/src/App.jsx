import { useState } from 'react';

// import components
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
	]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filter, setFilter] = useState('');

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

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter onChange={handleFilterChange} placeholder='filter shown with' />

			<h3>Add a new contact</h3>
			<PersonForm 
				persons={persons} 
				newName={newName} 
				newNumber={newNumber} 
				setPersons={setPersons} 
				handleNameChange={handleNameChange} 
				handleNumberChange={handleNumberChange} 
			/>

			<h3>Numbers</h3>
			<Persons 
				persons={persons} 
				filter={filter} 
			/>
		</div>
	);
};

export default App;
