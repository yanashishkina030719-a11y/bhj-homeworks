const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

function createTask(title) {
    const task = document.createElement('div');
    task.className = 'task';

    const taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';  
    taskTitle.textContent = title;

    const removeButton = document.createElement('a');
    removeButton.href = '#';
    removeButton.className = 'task__remove';
    removeButton.innerHTML = '&times;';  

    task.appendChild(taskTitle);
    task.appendChild(removeButton);
    return task;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = input.value.trim();
    if (title === '') return;
    
    const task = createTask(title);
    tasksList.appendChild(task);
    
    input.value = '';
});