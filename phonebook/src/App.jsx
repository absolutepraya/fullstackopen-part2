import { useState, useEffect } from 'react';
import phonebookSerice from './services/phonebookService.js';

// import components
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
	const [persons, setPersons] = useState([]);
	// fetch data from server using axios
	useEffect(() => {
		phonebookSerice.getAll().then((initialPersons) => {
			setPersons(initialPersons);
		});
	}, []);
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
			<Filter onChange={handleFilterChange} />

			<h3>Add a new number</h3>
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
				setPersons={setPersons}
			/>
		</div>
	);
};

export default App;
