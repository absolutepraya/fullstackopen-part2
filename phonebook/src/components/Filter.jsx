const Filter = ({ onChange }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>Filter shown with:</td>
                    <td>
                        <input
							className='text-input'
                            placeholder='Input filter here'
                            onChange={onChange}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Filter;
