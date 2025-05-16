function createProjectList() {
    const projectListDiv = document.createElement("div");
    projectListDiv.classList.add("project-list");
    document.querySelector(".sidebar").appendChild(projectListDiv);

    const addProjectButton = document.createElement("button");
    addProjectButton.textContent = "Add";
    addProjectButton.classList.add("add-project-button");
    projectListDiv.appendChild(addProjectButton);

    addProjectButton.onclick = () => {
        createProject();
    };
}

export default createProjectList;