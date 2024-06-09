import { useState } from 'react';

const App = () => {
	const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
	const [newName, setNewName] = useState('');

	const addPerson = e => {
		e.preventDefault();
		// check if person already exists
		if (persons.find(person => person.name == newName)) {
			alert(`${newName} is already added to phonebook`);
			return;
		}
		const newPerson = { name: newName };
		setPersons(persons.concat(newPerson));
	}

	const handleNameChange = e => {
		// console.log(e.target.value);
		setNewName(e.target.value);
	}

	return (
		<div>

			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input placeholder='input name here' onChange={handleNameChange}/>
				</div>
				<div>
					<button type='submit'>add</button>
				</div>
			</form>
			
			<h2>Numbers</h2>
			<ul>
				{persons.map((person) => (
					<li key={person.name}>
						{person.name}
					</li>
				))}
			</ul>

		</div>
	);
};

export default App;
