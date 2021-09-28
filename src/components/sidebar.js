import {Pubsub} from './../application-logic/pubsub';
import {Data} from './../application-logic/data';

export const sideBarModule = (() => {
    const render =  () => {
        console.log("HEYY");
        console.log(Data.getProjects());
        const projectListContainer = document.querySelector(".project-list");
        projectListContainer.textContent = "";
        const arrayOfProjects = Data.getProjects();
        arrayOfProjects.forEach(project => createProjectDiv(project, projectListContainer));
    }

    const createProjectDiv = (project, projectListContainer) => {
       const mainDiv = document.createElement("div"); 
       mainDiv.classList.add("project");
       const projectTitle = document.createElement("p");
       projectTitle.textContent = project.getProjectName();
       const deleteButton = document.createElement("span");
       deleteButton.classList.add("material-icons-outlined");
       deleteButton.textContent = "close";
       mainDiv.appendChild(projectTitle);
       mainDiv.appendChild(deleteButton);
       projectListContainer.appendChild(mainDiv);
    }
    Pubsub.subscribe("projectAdded", render);
})();
