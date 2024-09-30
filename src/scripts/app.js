import todo from './data/todos.js';
import string from './utils/string.js';

const listElement = document.querySelector('.todo-list');
const submitButton = document.querySelector('.submit-button');

renderList();

listElement.addEventListener('click', e => {
	if (e.target.className === 'remove-button') {
		const id = string.removePrefix(e.target.id, 'remove-');
		todo.removeItem(id);
	}

	if (e.target.className.includes('checkbox')) {
		const id = string.removePrefix(e.target.id, 'checkbox-');
		alert(e.target.checked);
		todo.checkItem(id);
	}
});

submitButton.addEventListener('click', e => {
	e.preventDefault();
	const newTodo = document.querySelector('.new-todo-input');
	const text = newTodo.value;
	newTodo.value = '';
	todo.addItem(text);
	renderList();
});

export function renderList() {
	let todosHTML = '';

	todo.todoList.forEach(todo => {
		todosHTML += `
		<li class="todo todo-${todo.id}">
			<input class="checkbox checkbox-${todo.id}" id="checkbox-${todo.id}" type="checkbox" ${todo.checked ? 'checked' : ''} />
			<input type="text" value="${todo.text}" />
			<button class="remove-button" id="remove-${todo.id}">Remove</button>
		</li>
	`;
	});

	listElement.innerHTML = todosHTML;
}
