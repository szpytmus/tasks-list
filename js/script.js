{

    const tasks = [
    ];


    const addNewTask = (newTaskContent) => {

       
        if(newTaskContent === ""){
            return;
        }

        tasks.push({
            content: newTaskContent,
            done: false,
        });

        render();
    };

    const removeTask = (taskIndex) =>{
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {

        tasks[taskIndex].done = !tasks[taskIndex].done
        render();
    }

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");
        
        removeButtons.forEach((removeButton, taskIndex) =>{
            removeButton.addEventListener("click", () =>{
               removeTask(taskIndex);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");
        
        toggleDoneButtons.forEach((doneButton, taskIndex) =>{
            doneButton.addEventListener("click", () =>{
               toggleTaskDone(taskIndex);
            });
        });
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `<li class="tasksList">
            <button class="tasksList__button ${task.done ? "tasksList__button--checked" : ""} js-done"></button>
            <span class="tasksList__content ${task.done ? "tasksList__content--done" : ""}" > ${task.content}</span>
            <button class="tasksList__button tasksList__button--remove js-remove"></button>
            </li>
            `;
        }

        document.querySelector(".js-tasksList").innerHTML = htmlString;

        bindEvents();
    };



    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        document.querySelector(".js-newTask").focus();

        addNewTask(newTaskContent);
    };


    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };


    init();

}