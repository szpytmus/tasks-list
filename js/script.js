{

    let tasks = [
    ];

    let hideDoneTasks = false;

    const addNewTask = (newTaskContent) => {

        tasks = [
            ...tasks,
            {
                content: newTaskContent,
                done: false,
            },
        ];

        render();
    };

    const removeTask = (taskIndex) => {

        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex + 1),
        ];

        render();
    };


    const toggleTaskDone = (taskIndex) => {

        tasks = [
            ...tasks.slice(0, taskIndex),
            { ...tasks[taskIndex], done: !tasks[taskIndex].done, },
            ...tasks.slice(taskIndex + 1),
        ];

        render();
    };

    const setTasksDone = () => {

        tasks = tasks.map((task) => ({
            ...task,
            done:true,
        }));

    render();

    };

    const toggleHideDoneTasks = () => {

        hideDoneTasks = !hideDoneTasks;
        render();

    }


    const checkToggleAllDoneButton = () => {

        if (tasks.every(({ done }) => done)) {
            document.getElementById("allTasksDoneButton").disabled = true;
        }
        else if (tasks.some(({ done }) => !done)) {
            document.getElementById("allTasksDoneButton").disabled = false;
        }
    }

    const bindButtonsEvents = () => {


        const allTasksDoneButton = document.querySelector(".js-allTasksDone");
        const toggleDoneTasksButton = document.querySelector(".js-toggleDoneTasks");

        if(allTasksDoneButton){
            allTasksDoneButton.addEventListener("click", setTasksDone);
        }
        
        if(toggleDoneTasksButton){
        toggleDoneTasksButton.addEventListener("click", toggleHideDoneTasks);
        }
            
       

    };

    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });

    };

    const bindToggleDoneEvents = () => {

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((doneButton, taskIndex) => {
            doneButton.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });
    };

    const renderTasks = () => {

        const taskToHTML = task =>   `<li class="tasksList__item ${task.done && hideDoneTasks ? "tasksList__item--hidden" : ""}">
            <button class="tasksList__button ${task.done ? "tasksList__button--checked" : ""} js-done"></button>
            <span class="tasksList__content ${task.done ? "tasksList__content--done" : ""}" > ${task.content}</span>
            <button class="tasksList__button tasksList__button--remove js-remove"></button>
            </li>
            `;
        
            const tasksElement = document.querySelector(".js-tasksList");
            tasksElement.innerHTML = tasks.map(taskToHTML).join("");
    };

    const renderButtons = () => {

        const allTasksDoneButton = document.querySelector(".js-allTasksDone");
        const toggleDoneTasksButton = document.querySelector(".js-toggleDoneTasks");

        if (tasks.length == 0) {
            allTasksDoneButton.classList.add("section__button--hidden")
            toggleDoneTasksButton.classList.add("section__button--hidden")
        }
        else {
            allTasksDoneButton.classList.remove("section__button--hidden")
            toggleDoneTasksButton.classList.remove("section__button--hidden")
        }

        hideDoneTasks ? toggleDoneTasksButton.innerHTML = "Show done" : toggleDoneTasksButton.innerHTML = "Hide done";

    };




    const render = () => {

        bindButtonsEvents();
        renderTasks();
        renderButtons();
        checkToggleAllDoneButton();
        bindRemoveEvents();
        bindToggleDoneEvents();

    };



    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        };

        newTaskElement.focus();
    };


    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();

}