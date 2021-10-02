import { Pubsub } from "../application-logic/pubsub";
import { Task } from "../application-logic/Classes";
export const addProjectModal = (() => {
    console.log(Pubsub);
    const modal = document.querySelector(".add-project-modal");
    const addProjectButton = document.querySelector(".add-project");
    const modalText = document.querySelector("#add-project-input");
    const showModal = () => {
        (modal.style.opacity == "1") ? modal.style.opacity = "0" : modal.style.opacity = "1";
    }
    const closeModalButton = document.querySelector(".project-cancel");
    const closeModal = (e) => {
        modal.style.opacity = "0";
        modalText.value = "";
    }
    const addNewProjectButton = document.querySelector(".project-add");
    console.log(addNewProjectButton);
    const addNewProject = (e) => {
        if(!(modalText.value)) return;
        Pubsub.publish("projectCreated", modalText.value);
        closeModal();
    }
    addNewProjectButton.addEventListener("click", addNewProject);
    closeModalButton.addEventListener("click", closeModal);
    addProjectButton.addEventListener("click", showModal);
    return {showModal};
})();

export const mainModal = (() => {
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
        appendAllChildren(prioritySelecter, [lowPriorityOption,mediumPriorityOption,highPriorityOption]);
        const buttonContainer = document.createElement("button");
        buttonContainer.classList.add("add-task-buttons");
        const closeButton = createButton("task-cancel", "Cancel");
        const addButton = createButton("task-add",secondButtonName);
        closeButton.addEventListener("click", deleteModal);
        appendAllChildren(buttonContainer, [closeButton, addButton]);
        appendAllChildren(mainDiv, [headerOfModal, titleLabel, titleInput, descriptionLabel, descriptionInput, 
                            dueDateLabel, dueDateInput, priorityLabel, prioritySelecter, buttonContainer]);
        document.body.appendChild(mainDiv);
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

       
    }
    return{createModal, deleteModal};

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





