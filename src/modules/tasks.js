function createTask() {
    const taskDiv = document.createElement("div");
    const task = document.createElement("ul");
    task.textContent = "Task";
    taskDiv.appendChild(task);
    taskDiv.classList.add("task");
    document.body.appendChild(taskDiv);
}

export default createTask;
