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

    const render = () =>{
        let htmlString = "";

        for(const task of tasks){
            htmlString += `
            <li>
                ${task.content}
            </li>
            `;
        }




        
    document.querySelector(".js-tasksList").innerHTML = htmlString;
    };

    const init = () => {
        render();   
    };


init();



}