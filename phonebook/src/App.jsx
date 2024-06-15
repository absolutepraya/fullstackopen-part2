import { useState, useEffect } from 'react';
import phonebookSerice from './services/phonebookService.js';

// import components
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';

const App = () => {
	// fetch data from server using axios
	useEffect(() => {
		phonebookSerice.getAll().then((initialPersons) => {
			setPersons(initialPersons);
		});
	}, []);
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filter, setFilter] = useState('');
	const [message, setMessage] = useState({ text: null, type: null });

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
			<div className='container'>
				<div className='title'>
					<h1>Phonebook</h1>
				</div>
				<div className='title-bg'>
					<h1>Phonebook</h1>
				</div>
			</div>
			<Notification text={message.text} type={message.type} />

			<h2>Apply filters</h2>
			<Filter onChange={handleFilterChange} />

			<h2>Add a new number</h2>
			<PersonForm
				persons={persons}
				newName={newName}
				newNumber={newNumber}
				setPersons={setPersons}
				setMessage={setMessage}
				handleNameChange={handleNameChange}
				handleNumberChange={handleNumberChange}
			/>

			<h2>Numbers</h2>
			<Persons
				persons={persons}
				filter={filter}
				setPersons={setPersons}
				setMessage={setMessage}
			/>
		</div>
	);
};

export default App;
