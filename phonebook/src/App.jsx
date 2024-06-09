import { useState } from 'react';

const App = () => {
	const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
	const [newName, setNewName] = useState('');

	const addPerson = e => {
		e.preventDefault();
		const newPerson = { name: newName };
		setPersons(persons.concat(newPerson));
		setNewName('');
	}

	const handleNameChange = e => {
		setNewName(e.target.value);
	}

	return (
		<div>

			<h2>Phonebook</h2>
			<form>
				<div>
					name: <input placeholder='input name here' onChange={handleNameChange}/>
				</div>
				<div>
					<button type='submit' onClick={addPerson}>add</button>
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
