import '../styles.css';
import createTaskList from './tasklist';
import createProjectList from './projectlist';

function createUI() {
    createHeader();
    createFooter();
    createSidebar();
    createTaskList();
    createProjectList();
}



// Basic UI elements for setup
function createHeader() {
    const headerDiv = document.createElement("div");
    const header = document.createElement("h1");
    header.textContent = "Todoloo";
    headerDiv.appendChild(header);
    headerDiv.classList.add("header");
    document.body.appendChild(headerDiv);
}

function createFooter() {
    const footerDiv = document.createElement("div");
    const footer = document.createElement("p");
    footerDiv.appendChild(footer);
    footer.classList.add("footer");
    document.body.appendChild(footerDiv);
}

function createSidebar() {
    const sidebarDiv = document.createElement("div");
    const sidebar = document.createElement("h2");
    sidebar.textContent = "Projects";
    sidebarDiv.appendChild(sidebar);
    sidebarDiv.classList.add("sidebar");
    document.body.appendChild(sidebarDiv);
}





export default createUI;