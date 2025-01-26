document.addEventListener('DOMContentLoaded', function () {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to remove a task
    function removeTask(event) {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    }

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create the task item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        removeButton.onclick = removeTask;

        // Append the remove button and the task item to the task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach Event Listeners to existing tasks
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', removeTask);
    });

    // Attach Event Listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
