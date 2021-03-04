export const uniqueArray = (array) => {
	let unique = [];
	let distinct = [];
	for (let i = 0; i < array.length; i++) {
		if (!unique[array[i].age]) {
			distinct.push(array[i].age);
			unique[array[i].age] = 1;
		}
	}
	return unique;
};
