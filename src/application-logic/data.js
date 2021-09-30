import {Pubsub} from './pubsub';
import {Project, Task} from './Classes';
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
    }
    const addNewTaskToData = (taskAndProjectInArray) => {
       const newTask = taskAndProjectInArray[0];
       newTask.setID(createUniqueID());
       const project = taskAndProjectInArray[1];
       newTask.setProject(project);
       project.addTask(newTask); 
       Pubsub.publish("projectClickedOrUpdated", project);
    }
    const deleteTaskFromData = (taskIDAndProject) => {
        const taskID = taskIDAndProject[0];
        const project = getProject(taskIDAndProject[1]);
        project.deleteTaskByID(taskID);
        Pubsub.publish("projectClickedOrUpdated", project);
    }
    const createUniqueID = () => {
        return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    }
    Pubsub.subscribe("newTaskAdded", addNewTaskToData);
    Pubsub.subscribe("projectDeleted", deleteProject);
    Pubsub.subscribe("taskDeleted", deleteTaskFromData);
    return {getProjects};
})();
