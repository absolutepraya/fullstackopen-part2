// Title ocmponent
const Title = ({ title }) => <h1>{title}</h1>;

// Header component
const Header = ({ course }) => <h2>{course}</h2>;

// Content component
const Content = ({ parts }) => {
	return (
		<div>
			{parts.map((part) => (
				<Part
					key={part.id}
					part={part.name}
					exercises={part.exercises}
				/>
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

// Total component
const Total = ({ parts }) => {
	const total = parts.reduce((sum, part) => sum + part.exercises, 0);
	return (
		<p>
			<strong>Total of {total} exercises</strong>
		</p>
	);
};

// Course component
const Course = ({ course }) => {
	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

const App = () => {
	const courses = [
		{
			name: 'Half Stack application development',
			id: 1,
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
				{
					name: 'Redux',
					exercises: 11,
					id: 4,
				},
			],
		},
		{
			name: 'Node.js',
			id: 2,
			parts: [
				{
					name: 'Routing',
					exercises: 3,
					id: 1,
				},
				{
					name: 'Middlewares',
					exercises: 7,
					id: 2,
				},
			],
		},
	];

	return (
		<div>
			<Title title="Web development curriculum" />
			{courses.map((course) => (
				<Course key={course.id} course={course} />
			))}
		</div>
	)
};

export default App;
