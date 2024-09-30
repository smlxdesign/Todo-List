import { renderList } from '../app.js';

export const todo = {
	todoList: [
		{
			id: JSON.stringify(1),
			checked: false,
			text: 'Play basketball'
		},
		{
			id: JSON.stringify(2),
			checked: false,
			text: 'Buy bread'
		}
	],

	findItem: function (todoId, kind) {
		let result;
		if (kind === undefined) {
			kind = 'object';
		}

		this.todoList.forEach(e => {
			if (e.id === todoId && result === undefined) {
				if (kind === 'object') {
					result = e;
				} else if (kind === 'string') {
					result = JSON.stringify(e);
				} else if (kind === 'index') {
					result = this.todoList.indexOf(e);
				}
			}
		});

		return result;
	},

	checkItem: function (id) {
		const item = this.findItem(id);
		item.checked = item.checked ? false : true;
		renderList();
	},

	removeItem: function (id) {
		const index = this.findItem(id, 'index');
		this.todoList.splice(index, 1);
		renderList();
	},

	addItem: function (text) {
		todo.todoList.push({
			id: JSON.stringify(this.todoList.length + 1),
			checked: false,
			text: text
		});
	}
};

export default todo;
