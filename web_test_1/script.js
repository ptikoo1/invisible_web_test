const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

function addTodo() {
    const text = todoInput.value.trim();
    if (text !== '') {
        const todoItem = createTodoItem(text);
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
}

function createTodoItem(text) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const todoText = document.createElement('div');
    todoText.classList.add('todo-text');
    todoText.innerText = text;
    todoItem.appendChild(todoText);

    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', () => editTodo(todoItem, todoText, editButton, deleteButton));
    todoItem.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => deleteTodo(todoItem));
    todoItem.appendChild(deleteButton);

    return todoItem;
}

function editTodo(todoItem, todoText, editButton, deleteButton) {
    const text = todoText.innerText;
    todoText.style.display = 'none';

    const editInput = document.createElement('input');
    editInput.classList.add('edit-input');
    editInput.value = text;
    todoItem.insertBefore(editInput, todoText);

    const saveButton = document.createElement('button');
    saveButton.classList.add('save-button');
    saveButton.innerText = 'Save';
    saveButton.addEventListener('click', () => saveTodo(todoItem, editInput, todoText, editButton, deleteButton));
    todoItem.insertBefore(saveButton, editButton);

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel-button');
    cancelButton.innerText = 'Cancel';
    cancelButton.addEventListener('click', () => cancelEdit(todoItem, editInput, todoText, editButton, deleteButton));
    todoItem.insertBefore(cancelButton, saveButton);

    editButton.style.display = 'none';
    deleteButton.style.display = 'none';
}

function saveTodo(todoItem, editInput, todoText, editButton, deleteButton) {
    const text = editInput.value.trim();
    if (text !== '') {
        todoText.innerText = text;
    }
    cancelEdit(todoItem, editInput, todoText, editButton, deleteButton);
}

function cancelEdit(todoItem, editInput, todoText, editButton, deleteButton) {
    todoText.style.display = 'block';
    todoItem.removeChild(editInput);
    todoItem.removeChild(todoItem.querySelector('.save-button'));
    todoItem.removeChild(todoItem.querySelector('.cancel-button'));
    editButton.style.display = 'block';
    deleteButton.style.display = 'block';
}

function deleteTodo(todoItem) {
    todoList.removeChild(todoItem);
}

addButton.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
