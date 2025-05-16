function createProject() {
    const project = document.createElement("p");
    project.textContent = "Project";
    project.classList.add("project");
    document.querySelector(".project-container").appendChild(project);
    
}

export default createProject;