import {Pubsub} from './pubsub';
import {Project, Task} from './Classes';
import { sideBarModule } from '../components/sidebar';
import {format, isToday,parseISO, isThisWeek} from '../../node_modules/date-fns';
export const Data = (() => {
    
    const getDataFromLocalStorage = () => {
        const projectTemplate  = JSON.parse(localStorage.getItem("Projects")) || [];
        console.log("PROJECTS TEMPLATE");
        console.log(projectTemplate);
        const projects = [];
        projectTemplate.forEach(projectObject => {
            const retrievingProject = Project(projectObject.projectName);
            const projectTasks = projectObject.tasks;
            projectTasks.forEach(taskTemplate => {
                console.log("GETTING INFO ON INBOX");
                console.log(taskTemplate.taskProject);
                console.log(projectObject.projectName);
                if(taskTemplate.taskProject !== projectObject.projectName){
                    return;
                }
                console.log("TASK TEMPLATE");
                console.log(taskTemplate);
                console.log(taskTemplate.taskTitle);
                const newTask = Task(taskTemplate.taskTitle, taskTemplate.taskDescription, taskTemplate.taskDueDate, taskTemplate.taskPriority,
                    taskTemplate.taskCompletionStatus, taskTemplate.taskID );
                newTask.setProject(retrievingProject);
                retrievingProject.addTask(newTask);
            });
            projects.push(retrievingProject);
        })
        Pubsub.publish("pageLoaded", projects);
        return projects;
    }
    
    const projectArray = getDataFromLocalStorage();
    const addProject = (projectName) => {
        const newProject = Project(projectName);
        projectArray.push(newProject);
        saveData();
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
        saveData();
        Pubsub.publish("projectUpdated", projectArray );
        Pubsub.publish("clearTaskList", null);
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
       saveData();
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
        saveData();
        Pubsub.publish("projectClickedOrUpdated", getProject(sideBarModule.currentSelectedProject()));
    }
    const changeTaskCompletionStatus = (taskIDAndProject) => {
        const taskID = taskIDAndProject[0];
        const project = getProject(taskIDAndProject[1]);
        const task = project.findTaskByID(taskID);
        const currentCompletionStatus = task.getCompletionStatus();
        task.setCompletionStatus((currentCompletionStatus === false) ? true : false);
        saveData();
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
           if(project.getProjectName() == "Today" || project.getProjectName() == "This Week") return;
           project.getAllTasks().forEach(task => {
               if(getProject(task.getProject().getProjectName()) === undefined) return;
               tasks.add(task)
            });
        });
        console.log("HERES THE TASKS");
        console.log(tasks);
        console.log(projectArray.length);
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
    //converting my factory functions with methods to objects with no methods and just the properties because local storage can't save functions
    const saveData = () => {
       const newData = projectArray.map(project => {
           const newObject = {};
           newObject.projectName = project.getProjectName();
           newObject.tasks = project.getAllTasks().map(task => {
               return {
                   taskTitle : task.getTitle(),
                   taskDescription : task.getDescription(),
                   taskDueDate : task.getDueDate(),
                   taskPriority : task.getPriority(),
                   taskCompletionStatus : task.getCompletionStatus(),
                   taskID : task.getID(),
                   taskProject : task.getProject().getProjectName()
                }
           })
           return newObject;
       });
       localStorage.setItem("Projects", JSON.stringify(newData));
       console.log("RETRIEVING THEM");       
    }
    
    Pubsub.subscribe("taskUpdated", updateTask);
    Pubsub.subscribe("taskCompletionStatusChanged", changeTaskCompletionStatus);
    Pubsub.subscribe("newTaskAdded", addNewTaskToData);
    Pubsub.subscribe("projectDeleted", deleteProject);
    Pubsub.subscribe("taskDeleted", deleteTaskFromData);
    return {getProjects, getProject, getAllTasks, addProject, getAllTasksForAProject, allTasksNotBelongingToAProject, getTasksDueToday, getTasksDueThisWeek};
})();
