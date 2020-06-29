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


    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li ${task.done ? " style=\"text-decoration:line-through\"" : ""}>
                ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-tasksList").innerHTML = htmlString;
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