import {Pubsub} from './pubsub';
import {Project, Task} from './Classes';
import { sideBarModule } from '../components/sidebar';
export const Data = (() => {
    const projectArray = [];
    const addProject = (projectName) => {
        const newProject = Project(projectName);
        projectArray.push(newProject);
        Pubsub.publish("projectUpdated", null);
    }
    Pubsub.subscribe("projectCreated", addProject);
    const getProjects = () => {
        return projectArray;
    }
    const deleteProject = (projectName) => {
        const projectToBeDeleted = getProject(projectName);
        const newProjectArray = projectArray.filter(project => project !== projectToBeDeleted);
        projectArray.splice(0,projectArray.length);
        projectArray.push(...newProjectArray);
        Pubsub.publish("projectUpdated", null );
    }
    const getProject = (projectName) => {
        for(let i = 0; i < projectArray.length; i++){
            if(projectArray[i].getProjectName() === projectName){
               return projectArray[i];
            }
        }
        return undefined;
    }
    const addNewTaskToData = (taskAndProjectInArray) => {
       const newTask = taskAndProjectInArray[0];
       newTask.setID(createUniqueID());
       const project = taskAndProjectInArray[1];
       newTask.setProject(project);
       project.addTask(newTask); 
       Pubsub.publish("projectClickedOrUpdated", getProject(sideBarModule.currentSelectedProject()));
    }
    const deleteTaskFromData = (taskIDAndProject) => {
        const taskID = taskIDAndProject[0];
        const project = getProject(taskIDAndProject[1]);
        project.deleteTaskByID(taskID);
        if(sideBarModule.currentSelectedProject() === "Inbox" || taskIDAndProject[1] != "Inbox"){
            removeFromInbox(taskID);
        }
        Pubsub.publish("projectClickedOrUpdated", getProject(sideBarModule.currentSelectedProject()));
    }
    const changeTaskCompletionStatus = (taskIDAndProject) => {
        const taskID = taskIDAndProject[0];
        const project = getProject(taskIDAndProject[1]);
        const task = project.findTaskByID(taskID);
        const currentCompletionStatus = task.getCompletionStatus();
        task.setCompletionStatus((currentCompletionStatus === false) ? true : false);
        Pubsub.publish("projectClickedOrUpdated", getProject(sideBarModule.currentSelectedProject()));
        
    }
    const removeFromInbox = (taskID) => {
        const inboxProject = getProject("Inbox");
        inboxProject.deleteTaskByID(taskID);
    }
    const allTasksNotBelongingToAProject = (projectName) => {
        const allTasks = Array.from(getAllTasks());
        allTasks.forEach(task => console.log(task.toString()));
        const tasksNotBelongingToProject = allTasks.filter(task => {
            if(task.hasBeenDeleted() === true){
                return false;
            }
            else if(task.getProject().getProjectName() !== projectName){
                return true;
            }
        });
        return tasksNotBelongingToProject;
    }
    
    const getAllTasks = () => {
        let tasks = new Set();
        projectArray.forEach(project => {
           project.getAllTasks().forEach(task => tasks.add(task));
        });
        return tasks;
    }
    const getAllTasksForAProject = (projectName) => {
        const allTasks = Array.from(getAllTasks());
        const tasksBelongToAProject = allTasks.filter(task => task.getProject().getProjectName() === projectName);
        return tasksBelongToAProject;
    }
    const updateTask = (taskAndUpdatedData) => {
        const task = taskAndUpdatedData[0];
        const title = taskAndUpdatedData[1];
        const description = taskAndUpdatedData[2];
        const dueDate = taskAndUpdatedData[3];
        const priority = taskAndUpdatedData[4]; 
        task.setTitle(title);
        task.setDescription(description);
        task.setDueDate(dueDate);
        task.setPriority(priority);
        Pubsub.publish("projectClickedOrUpdated", getProject(sideBarModule.currentSelectedProject()));
    }
    const createUniqueID = () => {
        return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    }
    Pubsub.subscribe("taskUpdated", updateTask);
    Pubsub.subscribe("taskCompletionStatusChanged", changeTaskCompletionStatus);
    Pubsub.subscribe("newTaskAdded", addNewTaskToData);
    Pubsub.subscribe("projectDeleted", deleteProject);
    Pubsub.subscribe("taskDeleted", deleteTaskFromData);
    return {getProjects, getProject, getAllTasks, addProject, getAllTasksForAProject, allTasksNotBelongingToAProject};
})();
