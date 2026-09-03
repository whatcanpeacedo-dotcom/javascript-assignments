const task = document.getElementById('task');
const addTaskBtn = document.getElementById('addTask');
const tasksContainer = document.getElementById('tasks');
const clearAllBtn = document.getElementById('clearAll-btn');

let allTasks = JSON.parse(localStorage.getItem('allTasks')) || [];

function saveTasks() {
    localStorage.setItem('allTasks', JSON.stringify(allTasks));
}

function renderTasks() {
    tasksContainer.innerHTML = "";

    allTasks.forEach((task, index) => {

        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => toggleTask(index));


        const span = document.createElement("span");
        span.textContent = task.text;
        span.className = "task-text";

        if (task.completed) {
            span.classList.add("completed");
        }


        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";

        editBtn.addEventListener("click", () => {
            editTask(index);
        });


        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", () => {
            deleteTask(index);
        });


        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        tasksContainer.appendChild(li);
    });
}


function addTask() {

    const text = task.value.trim();

    if (text === "") return;

    allTasks.push({
        text: text,
        completed: false
    });

    task.value = "";

    saveTasks();
    renderTasks();
}


function toggleTask(index) {

    allTasks[index].completed = !allTasks[index].completed;

    saveTasks();
    renderTasks();
}


function editTask(index) {

    const newText = prompt("Edit task:", allTasks[index].text);

    if (newText === null) return;

    const trimmedText = newText.trim();

    if (trimmedText !== "") {

        allTasks[index].text = trimmedText;

        saveTasks();
        renderTasks();
    }
}


function deleteTask(index) {

    allTasks.splice(index, 1);

    saveTasks();
    renderTasks();
}


function clearAll() {

    allTasks = [];

    localStorage.removeItem("allTasks");

    renderTasks();
}


addTaskBtn.addEventListener("click", addTask);

task.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

clearAllBtn.addEventListener("click", clearAll);

renderTasks();