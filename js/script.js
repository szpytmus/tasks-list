{

    let tasks = [
    ];

    let hideDoneTasks = false;

    const addNewTask = (newTaskContent) => {

        tasks = [
            ...tasks,
            {content: newTaskContent,
            done: false,},
        ];

        render();
    };

    const removeTask = (taskIndex) => {

        tasks = [ 
            ...tasks.slice(0,taskIndex),
            ...tasks.slice(taskIndex+1),
        ];

        render();
    };

    const toggleTaskDone = (taskIndex) => {

        tasks[taskIndex].done = !tasks[taskIndex].done
        render();
    };

    const toggleTasksDone = () => {

            for (const taskIndex in tasks){
                if(tasks[taskIndex].done == false){
                    tasks[taskIndex].done = true
                    
                };
            };
    render();

    };

    const checkToggleAllDoneButton = () => {

        if( tasks.every(({ done }) => done)){   
            document.getElementById("allTasksDoneButton").disabled = true;
            }
        else if( tasks.some(({ done }) => !done)){   
            document.getElementById("allTasksDoneButton").disabled = false;
            }
    }

    const bindButtonsEvents = () => {

        const allTasksDoneButton = document.querySelector(".js-allTasksDone");
        allTasksDoneButton.addEventListener("click", () => {

            
            toggleTasksDone();
        })

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

        let htmlString = "";

        for (const task of tasks) {
            htmlString += `<li class="tasksList__item">
            <button class="tasksList__button ${task.done ? "tasksList__button--checked" : ""} js-done"></button>
            <span class="tasksList__content ${task.done ? "tasksList__content--done" : ""}" > ${task.content}</span>
            <button class="tasksList__button tasksList__button--remove js-remove"></button>
            </li>
            `;
        }

        document.querySelector(".js-tasksList").innerHTML = htmlString;
    };

    const renderButtons = () => {
    
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