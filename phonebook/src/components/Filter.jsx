const Filter = ({ onChange }) => {
	return (
		<div>
			filter shown with: {}
			<input
				placeholder='input filter here'
				onChange={onChange}
			/>
		</div>
	);
};

export default Filter;
