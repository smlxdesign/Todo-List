import todo from './data/todos.js';
import string from './utils/string.js';

const listElement = document.querySelector('.todo-list');
const submitButton = document.querySelector('.submit-button');

renderList();

listElement.addEventListener('click' || 'submit', e => {
	if (e.target.className === 'checkbox') {
		const id = string.removePrefix(e.target.id, 'checkbox-');
		todo.checkItem(id);
	}

	if (e.target.className === 'remove-button') {
		const id = string.removePrefix(e.target.id, 'remove-');
		todo.removeItem(id);
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
			<input class="checkbox" id="checkbox-${todo.id}" type="checkbox" ${todo.checked ? 'checked' : ''} />
			<span class="todo-text" id="todo-text-${todo.id}" type="text">${todo.text}</span>
			<button class="remove-button" id="remove-${todo.id}">Remove</button>
		</li>
	`;
	});

	listElement.innerHTML = todosHTML;
}
