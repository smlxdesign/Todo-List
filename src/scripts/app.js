import * as todo from './data/todos.js';

const mainElement = document.querySelector('main');

renderList();

mainElement.addEventListener('click', e => {
	if (e.target.className === 'remove-button') {
		const prefixRegex = /^(remove-)/;
		const id = e.target.id.replace(prefixRegex, '');
		const index = todo.findItem(id, 'index');
		todo.todoList.splice(index, 1);
		renderList();
	}
});

function renderList() {
	let todosHTML = '';

	todo.todoList.forEach(todo => {
		todosHTML += `
		<div class="todo todo-${todo.id}">
			<input type="checkbox" ${todo.checked ? 'checked' : ''}/>
			<input type="text" value="${todo.text}" />
			<button class="remove-button" id="remove-${todo.id}">Remove</button>
		</div>
	`;
	});

	mainElement.innerHTML = todosHTML;
}
