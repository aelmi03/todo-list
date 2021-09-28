import {Pubsub} from './pubsub';
import {Project} from './Classes';
export const Data = (() => {
    const projectArray = [];
    const addProject = (projectName) => {
        const newProject = Project(projectName);
        projectArray.push(newProject);
        Pubsub.publish("projectAdded", newProject);
    }
    Pubsub.subscribe("projectCreated", addProject);
    const getProjects = () => {
        return projectArray;
    }
    return {getProjects};
})();
