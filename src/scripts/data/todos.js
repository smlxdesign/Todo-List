export let todoList = [
	{
		id: '7e022cde-33ff-4939-ac62-5cc5c1dec9fc',
		checked: false,
		text: 'The first todo'
	},
	{
		id: '2',
		checked: true,
		text: 'second'
	}
];

export function findItem(todoId, kind) {
	let result;
	if (kind === undefined) {
		kind = 'object';
	}

	todoList.forEach(e => {
		if (e.id === todoId && result === undefined) {
			if (kind === 'object') {
				result = e;
			} else if (kind === 'string') {
				result = JSON.stringify(e);
			} else if (kind === 'index') {
				result = todoList.indexOf(e);
			}
		}
	});

	return result;
}
