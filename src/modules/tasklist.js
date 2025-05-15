import createTask from "./tasks";

function createTaskList() {
    const taskListDiv = document.createElement("div");
    const taskList = document.createElement("ul");
    taskListDiv.appendChild(taskList);
    taskListDiv.classList.add("task-list");
    document.body.appendChild(taskListDiv);

    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add";
    addTaskButton.classList.add("add-task-button");
    taskListDiv.appendChild(addTaskButton);
}

export default createTaskList;

