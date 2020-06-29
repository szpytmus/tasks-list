{

    const tasks = [
        {
            content: "nie wiem",
            done: false,

        },
        {
            content: "nie wiem 2",
            done: true,
        },
    ];


    const addNewTask = (newTaskContent) => {

        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const removeTask = (taskIndex) =>{
        tasks.splice(taskIndex, 1);
        render();
    }


    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            
            <li ${task.done ? " style=\"text-decoration:line-through\"" : ""}>
            <button class="js-remove">Remove</button>
            ${task.content}
            
            </li>
            `;
        }

        document.querySelector(".js-tasksList").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");
        
        removeButtons.forEach((removeButton, taskIndex) =>{
            removeButton.addEventListener("click", () =>{
               removeTask(taskIndex);
            });
        });
    };



    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
       
        if(newTaskContent === ""){
            return;
        }


        addNewTask(newTaskContent);
    };


    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };


    init();

}