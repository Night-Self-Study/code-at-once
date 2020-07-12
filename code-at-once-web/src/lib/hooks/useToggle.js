import { useState } from 'react';

const useToggle = (initialValue = false) => {
	if (typeof initialValue !== 'boolean') {
		throw Error('useToggle: The value is not Boolean type');
	}

	const [value, setValue] = useState(initialValue);

	return [
		value,
		{
			setLoggedIn: setValue,
			toggle: () => setValue((flag) => !flag),
		},
	];
};

export default useToggle;
