function createTask() {
    const taskDiv = document.createElement("div");
    const task = document.createElement("ul");
    task.textContent = "Task";
    taskDiv.appendChild(task);
    taskDiv.classList.add("task");
    document.querySelector(".task-list").appendChild(taskDiv);
}

export default createTask;
