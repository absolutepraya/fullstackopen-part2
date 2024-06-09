// Header component
const Header = ({ course }) => <h1>{course}</h1>;

// Content component
const Content = ({ parts }) => {
	return (
		<div>
			{parts.map((part) => (
				<Part key={part.id} part={part.name} exercises={part.exercises} />
			))}
		</div>
	);
};

// Part component
const Part = ({ part, exercises }) => (
	<p>
		{part} {exercises}
	</p>
);

// Course component
const Course = ({ course}) => {
	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
		</div>
	)
}

// App component
const App = () => {
	const course = {
		id: 1,
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
				id: 1,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
				id: 2,
			},
			{
				name: 'State of a component',
				exercises: 14,
				id: 3,
			},
		],
	};

	return <Course course={course} />;
};

export default App;
