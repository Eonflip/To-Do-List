export default function createTaskList() {
    const taskListDiv = document.createElement("div");
    const taskList = document.createElement("ul");
    const testTask = document.createElement("li");
    testTask.classList.add("task");
    testTask.textContent = "Test Task";
    taskList.appendChild(testTask);
    taskListDiv.appendChild(taskList);
    taskList.classList.add("task-list");
    document.body.appendChild(taskListDiv);
}