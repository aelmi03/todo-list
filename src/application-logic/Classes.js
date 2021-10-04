export const Task = (taskTitle, taskDescription, taskDueDate, taskPriority, isCompleted, taskID) => {
    let title = taskTitle;
    let description = taskDescription;
    let dueDate = taskDueDate;
    let priority = taskPriority;
    let status = isCompleted;
    let ID = taskID;
    let deletionStatus = false;
    let project = null;

    const getTitle = () => {
        return title;
    }

    const setTitle = (newTitle) => {
        title = newTitle;
    }

    const getDescription = () => {
        return description;
    }

    const setDescription = (newDescription) => {
        description = newDescription;
    }

    const getDueDate = ()=>{
        return dueDate;
    }
    const setDueDate = (newDate) => {
        dueDate = newDate;
    }
    const getPriority = () => {
        return priority;
    }
    
    const setPriority = (newPriority) => {
        priority = newPriority;
    }

    const getCompletionStatus = () => {
        return status;
    }

    const setCompletionStatus = (newStatus) => {
        status = newStatus;
    }

    const getID = () => {
        return ID;
    }

    const setID = (id) => {
        ID = id;
    }
    const getProject = () => {
        return project;
    }
    const setProject = (newProject) => {
        project = newProject;
    }
    const toString = () => {
        return `task : ${title}, description : ${description},
         date : ${dueDate}, priority : ${priority}, ID : ${ID}`;
    }

    const hasBeenDeleted = () => {
        return deletionStatus;
    }

    const setTaskToBeDeleted = (bool) => {
        deletionStatus = bool;
    }
    

    return { getTitle, setTitle, getDescription, setDescription, getDueDate, setDueDate, getPriority, setPriority, 
        getCompletionStatus, setCompletionStatus, getID, setID, getProject , setProject, toString, hasBeenDeleted, setTaskToBeDeleted };
}

export const Project = (title) => {
    const tasks = [];
    const projectTitle = title;
    const getProjectName = () => {
        return projectTitle;
    }
    const setProjectName = (newProjectTitle) => {
        projectTitle = newProjectTitle;
    }
    const getAllTasks = () => {
        return tasks;
    }
    const findTaskByID = (id) => {
       return tasks.filter(task => task.getID() == id)[0];
    }
    
    const addTask = (task) => {
       tasks.push(task);
    }
    const removeAllTasks = () => {
       tasks.length = 0;
    }
    const updateTaskByID = (id, newTask) => {
       const updatedTask = findTaskByID(id);
       Object.assign(updatedTask, newTask);
    }

    const deleteTaskByID = (id) => {
        const task = findTaskByID(id);
        if(!task) return;
        const position = tasks.indexOf(task);
        const newArray = tasks.splice(position,1);
        task.setTaskToBeDeleted(true);
        tasks.slice(0, tasks.length).push(...newArray);
    }

    return { getAllTasks, getProjectName, setProjectName, findTaskByID, addTask,updateTaskByID,deleteTaskByID, removeAllTasks };

}
