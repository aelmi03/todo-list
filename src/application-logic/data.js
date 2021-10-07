import {Pubsub} from './pubsub';
import {Project, Task} from './Classes';
import { sideBarModule } from '../components/sidebar';
import {format, isToday,parseISO, isThisWeek} from '../../node_modules/date-fns';
export const Data = (() => {
    
    const getDataFromLocalStorage = () => {
        const projects  = JSON.parse(localStorage.getItem("ProjectsArray")) || [];
        console.log("PROJECTS HEHE");
        console.log(projects.length);
        projects.forEach(project => console.log(project.getProjectName()));
        Pubsub.publish("pageLoaded", projects);
        return projects;
    }
    
    const projectArray = [];
    const addProject = (projectName) => {
        const newProject = Project(projectName);
        projectArray.push(newProject);
        Pubsub.publish("projectUpdated", projectArray);
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
        Pubsub.publish("projectUpdated", projectArray );
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
       formatDate(newTask);
       newTask.setProject(project);
       project.addTask(newTask); 
       Pubsub.publish("projectClickedOrUpdated", getProject(sideBarModule.currentSelectedProject()));
    }
    const formatDate = (newTask) => {
        const date = new Date(newTask.getDueDate());
        const realDateRegardlessOfTimezone = new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
        newTask.setDueDate(format(realDateRegardlessOfTimezone, 'yyyy-MM-dd'));
    }
    const deleteTaskFromData = (taskIDAndProject) => {
        const taskID = taskIDAndProject[0];
        const project = getProject(taskIDAndProject[1]);
        project.deleteTaskByID(taskID);
        checkIfTaskDoesNotBelongToSpecialProject("Inbox", taskID, taskIDAndProject[1]);
        checkIfTaskDoesNotBelongToSpecialProject("Today", taskID, taskIDAndProject[1]);
        checkIfTaskDoesNotBelongToSpecialProject("This Week", taskID, taskIDAndProject[1]);
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
    const checkIfTaskDoesNotBelongToSpecialProject = (projectName, taskID, projectTaskBelongsTo) => {
        if(sideBarModule.currentSelectedProject() === projectName && projectTaskBelongsTo != projectName){
            console.log("REMOVING SPECIAL PROJECT HEHEH");
            removeFromSpecialProject(projectName,taskID);
        }
    }
    const removeFromSpecialProject = (projectName, taskID) => {
        const specialProject = getProject(projectName);
        console.log(taskID);
        specialProject.deleteTaskByID(taskID);
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
           if(project.getProjectName() == "Today" || project.getProjectName() =="This Week") return;
           project.getAllTasks().forEach(task => tasks.add(task));
        });
        return tasks;
    }
    const getAllTasksForAProject = (projectName) => {
        const allTasks = Array.from(getAllTasks());
        const tasksBelongToAProject = allTasks.filter(task => task.getProject().getProjectName() === projectName);
        return tasksBelongToAProject;
    }

    const getTasksDueToday = () => {
        const allTasks = Array.from(getAllTasks());
        const tasksDueToday = allTasks.filter(task => {
           return isToday(parseISO(task.getDueDate()));
        });
        return tasksDueToday;

    }
    const getTasksDueThisWeek = () => {
        const allTasks = Array.from(getAllTasks());
        const tasksDueThisWeek = allTasks.filter(task => {
            return isThisWeek(parseISO(task.getDueDate(),{ weekStartsOn: 1}))
        });
        return tasksDueThisWeek;
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
        formatDate(task);
        task.setPriority(priority);
        if(sideBarModule.currentSelectedProject() == "Today"){
            updateTodayTasks();
        }
        if(sideBarModule.currentSelectedProject() == "This Week"){
            updateThisWeekTasks();
        }
        saveData();
        Pubsub.publish("projectClickedOrUpdated", getProject(sideBarModule.currentSelectedProject()));
    }
    const updateTodayTasks = () => {
        const todayProject = getProject("Today");
        todayProject.removeAllTasks();
        getTasksDueToday().forEach(task => {todayProject.addTask(task)});
    }
    const updateThisWeekTasks = () => {
        const thisWeekProject = getProject("This Week");
        thisWeekProject.removeAllTasks();
        getTasksDueThisWeek().forEach(task => {thisWeekProject.addTask(task)});
    }
    
    const createUniqueID = () => {
        return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    }

    const saveData = () => {
        console.log("saving data");
        console.log(projectArray);
        localStorage.setItem("ProjectsArray", JSON.stringify(projectArray));
        const savedProjects = JSON.parse(localStorage.getItem("ProjectsArray"));
        console.log("PROVING I SAVED DATA");
        console.log(savedProjects);
        const testingArray = [{a:"Wassup", b:"hello"}];
        console.log(testingArray);
        localStorage.setItem("testingArray", JSON.stringify(testingArray));
        const retrievedTesting = JSON.parse(localStorage.getItem("testingArray"));
        console.log(retrievedTesting);

    }
    
    Pubsub.subscribe("taskUpdated", updateTask);
    Pubsub.subscribe("taskCompletionStatusChanged", changeTaskCompletionStatus);
    Pubsub.subscribe("newTaskAdded", addNewTaskToData);
    Pubsub.subscribe("projectDeleted", deleteProject);
    Pubsub.subscribe("taskDeleted", deleteTaskFromData);
    return {getProjects, getProject, getAllTasks, addProject, getAllTasksForAProject, allTasksNotBelongingToAProject, getTasksDueToday, getTasksDueThisWeek};
})();
