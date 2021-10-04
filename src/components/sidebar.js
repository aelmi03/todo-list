import {Pubsub} from './../application-logic/pubsub';
import {Data} from './../application-logic/data';


export const sideBarModule = (() => {
    const render =  () => {
        console.log("HEYY");
        const projectListContainer = document.querySelector(".project-list");
        projectListContainer.textContent = "";
        const arrayOfProjects = Data.getProjects();
        console.log(arrayOfProjects);
        arrayOfProjects.forEach(project => createProjectDiv(project, projectListContainer));
    }

    const createProjectDiv = (project, projectListContainer) => {
       if(project.getProjectName() == "Inbox") return;
       const mainDiv = document.createElement("div");
       mainDiv.addEventListener("click", (e) => Pubsub.publish("projectClickedOrUpdated", project)); 
       mainDiv.classList.add("project");
       mainDiv.addEventListener("click", makeActiveProject);
       mainDiv.setAttribute("project-name", project.getProjectName());
       const projectTitle = document.createElement("p");
       projectTitle.textContent = project.getProjectName();
       const deleteButton = document.createElement("span");
       deleteButton.classList.add("material-icons-outlined");
       deleteButton.textContent = "close";
       deleteButton.addEventListener("click", (e) => Pubsub.publish("projectDeleted", project.getProjectName()));
       mainDiv.appendChild(projectTitle);
       mainDiv.appendChild(deleteButton);
       projectListContainer.appendChild(mainDiv);
    }
    const makeActiveProject = (e) => {
        let mainDiv = e.target;
        if(mainDiv.nodeName.toLowerCase() == "p" || mainDiv.nodeName.toLowerCase() == "span"){
            mainDiv = mainDiv.parentNode;
        }
        makeAllProjectNotActive();
        console.log("ADDING ACTIVE CLASS");
        mainDiv.classList.add("active-project");
    }
    const makeAllProjectNotActive = () => {
        const allProjectDivs = document.querySelectorAll(".project");
        allProjectDivs.forEach(project => {
            if(project.classList.contains(("active-project"))){
                project.classList.remove("active-project");
            }
        });
    }
    const currentSelectedProject = () => {
        const currentProject = document.querySelector(".active-project");
        return currentProject.getAttribute("project-name");
    }
    Pubsub.subscribe("projectUpdated", render);
    return {currentSelectedProject, makeActiveProject};
})();

const inboxProject = (() => {
    const inbox = document.querySelector(`div[project-name = "Inbox"]`);

    const displayInbox = (e) => {
        Pubsub.publish("projectClickedOrUpdated", makeInboxProject(e));
    }
    inbox.addEventListener("click", displayInbox);
    const makeInboxProject = (e) => {
        if((Data.getProject("Inbox") === undefined)){
            Data.addProject("Inbox");
        }
        sideBarModule.makeActiveProject(e);
        const inbox = Data.getProject("Inbox");
        const inboxSpecificTasks = Data.getAllTasksForAProject("Inbox");
        const tasksNotSpecificToInbox = Data.allTasksNotBelongingToAProject("Inbox");
        console.log("TASKS NOT SPECIFIC");
        tasksNotSpecificToInbox.forEach(task => console.log(task.toString()));
        inbox.removeAllTasks();  
        [...inboxSpecificTasks, ...tasksNotSpecificToInbox].forEach(task => inbox.addTask(task));
        console.log("TASKS DUE TODAY");
        Data.getTasksDueToday().forEach(task => console.log(task.toString()));
        return inbox;
    }
    const initializeInbox = () => {
       
    }
})();

const todayProject = (() => {
    const todayProjectDiv = document.querySelector(`div[project-name = "Today"]`);
    const displayToday = (e) => {
        Pubsub.publish("projectClickedOrUpdated", makeTodayProject(e));
    }
    todayProjectDiv.addEventListener("click", displayToday);
    const makeTodayProject = (e) => {
        sideBarModule.makeActiveProject(e);
        const today = Data.getProject("Today");
        const todayTasks = Data.getProjectsDueToday();
    }
    const initializeToday = () => {
        if((Data.getProject("Today") === undefined)){
            Data.addProject("Today");
        }
    }
})();
