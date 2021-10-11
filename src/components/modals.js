import { Pubsub } from "../application-logic/pubsub";
import { Task } from "../application-logic/Classes";
import { Data } from "../application-logic/data";
export const addProjectModal = (() => {
    const mainContent = document.querySelector(".main-content");
    const modal = document.querySelector(".add-project-modal");
    const addProjectButton = document.querySelector(".add-project");
    const modalText = document.querySelector("#add-project-input");
    const warningText = document.querySelector(".warning-text");
    const showModal = () => { 
            modal.style.opacity = "1";
            modal.style.display = "flex";
            mainContent.style.pointerEvents = "none";
    }
    const closeModalButton = document.querySelector(".project-cancel");
    const closeModal = (e) => {
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
        },400);
        modalText.value = "";
        mainContent.style.pointerEvents = "auto";
        warningText.textContent = "";
    }
    const addNewProjectButton = document.querySelector(".project-add");
    const addNewProject = (e) => {
        if(!(modalText.value)){
            warningText.textContent = "Project name field cannot be empty";
            return;
        };
        if(Data.getProject(modalText.value) !== undefined){
            warningText.textContent = "Projects are not allowed to have the same name";
            return;
        }
        Pubsub.publish("projectCreated", modalText.value);
        closeModal();
    }
    addNewProjectButton.addEventListener("click", addNewProject);
    closeModalButton.addEventListener("click", closeModal);
    addProjectButton.addEventListener("click", showModal);
    return {showModal};
})();

export const mainModal = (() => {
    const mainContent = document.querySelector(".main-content");
    const createModal = (modalName, secondButtonName) => {
        const mainDiv = document.createElement("div");
        mainDiv.classList.add("add-task-modal");
        const headerOfModal = document.createElement("h2");
        headerOfModal.textContent = modalName;
        const titleLabel = createLabel("title", "Title:");
        const titleInput = createInput("text", "title", "title");
        titleInput.setAttribute("maxlength", "20");
        const descriptionLabel = createLabel("description", "Description:");
        const descriptionInput = document.createElement("textarea");
        descriptionInput.setAttribute("id", "description");
        descriptionInput.setAttribute("name", "description");
        const dueDateLabel = createLabel("due-date", "Due Date:");
        const dueDateInput = createInput("date","due-date","due-date");
        const priorityLabel = createLabel("priority","Priority:");
        const prioritySelecter = document.createElement("select");
        prioritySelecter.setAttribute("name", "priority");
        prioritySelecter.setAttribute("id", "priority");
        const lowPriorityOption = createOptionElement("Low", "Low");
        const mediumPriorityOption = createOptionElement("Medium", "Medium");
        const highPriorityOption = createOptionElement("High", "High");
        const warningText = document.createElement("p");
        warningText.classList.add("add-task-warning-text");
        appendAllChildren(prioritySelecter, [lowPriorityOption,mediumPriorityOption,highPriorityOption]);
        const buttonContainer = document.createElement("button");
        buttonContainer.classList.add("add-task-buttons");
        const closeButton = createButton("task-cancel", "Cancel");
        const addButton = createButton("task-add",secondButtonName);
        closeButton.addEventListener("click", deleteModal);
        appendAllChildren(buttonContainer, [closeButton, addButton]);
        appendAllChildren(mainDiv, [headerOfModal, titleLabel, titleInput, descriptionLabel, descriptionInput, 
                            dueDateLabel, dueDateInput, priorityLabel, prioritySelecter, warningText, buttonContainer]);
        document.body.appendChild(mainDiv);
        mainContent.style.pointerEvents = "none";
    }
    const createInput = (type, id, nameAttribute) => {
        const input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("id", id);
        input.setAttribute("name", nameAttribute);
        return input;
    }
    const createLabel = (forAttribute, text) => {
        const label = document.createElement("label");
        label.setAttribute("for", forAttribute);
        label.textContent = text;
        return label;
    }
    const createOptionElement = (value,text) => {
        const option = document.createElement("option");
        option.setAttribute("value", value);
        option.textContent = text;
        return option;
    }
    const createButton = (className, text) => {
        const button = document.createElement("button");
        button.classList.add(className);
        button.textContent = text;
        return button;
    }
    const appendAllChildren = (container, arrayOfChildren) => {
        for(let i =0; i < arrayOfChildren.length; i++){
            container.appendChild(arrayOfChildren[i]);
        }
    }

    const deleteModal = (e) => {
        const mainDiv = e.target.parentNode.parentNode;
        mainDiv.style.opacity = "0";
        setTimeout(function(){ 
            document.body.removeChild(e.target.parentNode.parentNode);
         }, 550);
        mainContent.style.pointerEvents = "auto";
    }
    const showWarningText = () => {
        const warningText = document.querySelector(".add-task-warning-text");
        warningText.textContent = "All fields must be filled out";
    }
    const checkAllValuesAreFilled = (title, description, dueDate, priorityInput) => {
        if(title && description && dueDate && priorityInput){
            return true;
        }
        return false;
    }
    return{createModal, deleteModal, checkAllValuesAreFilled, showWarningText};

})();

export const addTaskModal = (() => {
    const createAddModal = (project) => {
        mainModal.createModal("New Task", "Add Task");
        const addTaskButton = document.querySelector(".task-add");
        const titleInput = document.querySelector("#title");
        const descriptionInput = document.querySelector("#description");
        const dueDateInput = document.querySelector("#due-date");
        const priorityInput = document.querySelector("#priority");
        addTaskButton.addEventListener("click", function(e){
            if(!(mainModal.checkAllValuesAreFilled(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value))){
                mainModal.showWarningText();
                return;
            }
            const newTask = Task(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, 
            false);
            Pubsub.publish("newTaskAdded", [newTask, project]);
            mainModal.deleteModal(e);
        });
    
    }
    Pubsub.subscribe("addTaskButtonClicked", createAddModal);
    return {createAddModal};
})();

export const editTaskModal = (() => {
    const createEditModal = (task) => {
        mainModal.createModal("Edit Task", "Update Task");
        populateEditModal(task);
        const addTaskButton = document.querySelector(".task-add");
        addTaskButton.addEventListener("click", function(e){
            if(!(mainModal.checkAllValuesAreFilled(getTitleInputValue(), getDescriptionInputValue(),getDueDateInputValue(),  getPriorityInputValue()))){
                mainModal.showWarningText();
                return;
            }
            Pubsub.publish("taskUpdated", [task, getTitleInputValue(), getDescriptionInputValue(),getDueDateInputValue(),  getPriorityInputValue()]);
            mainModal.deleteModal(e);
        });
    }
    const populateEditModal = (task) => {
        const titleInput = document.querySelector("#title");
        titleInput.value = task.getTitle();
        const descriptionInput = document.querySelector("#description");
        descriptionInput.value = task.getDescription();
        const dueDateInput = document.querySelector("#due-date");
        dueDateInput.value = task.getDueDate();
        const priorityInput = document.querySelector("#priority");
        priorityInput.value = task.getPriority();
    }
    const getTitleInputValue = () => {
        const titleInput = document.querySelector("#title");
        return titleInput.value;
    }
    const getDescriptionInputValue = () => {
        const descriptionInput = document.querySelector("#description");
        return descriptionInput.value;
    }
    const getDueDateInputValue = () => {
        const dueDateInput = document.querySelector("#due-date");
        return dueDateInput.value;
    }
    const getPriorityInputValue = () => {
        const priorityInput = document.querySelector("#priority");
        return priorityInput.value;
    }
    Pubsub.subscribe("editTaskClicked", createEditModal);
})();





