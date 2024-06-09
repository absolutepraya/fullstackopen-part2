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

export default Course;