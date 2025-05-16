import createTask from "./tasks";

function createTaskList() {
    const taskListDiv = document.createElement("div");
    taskListDiv.classList.add("task-list");
    document.body.appendChild(taskListDiv);

    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add";
    addTaskButton.classList.add("add-task-button");
    taskListDiv.appendChild(addTaskButton);

    addTaskButton.onclick = () => {
       createTask();
    };
}

export default createTaskList;

