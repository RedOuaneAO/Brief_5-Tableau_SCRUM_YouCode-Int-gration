/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form

}

function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks

}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks

}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}
// document.getElementById('saveBtn').addEventListener('click', addTasks);  same as onclick on html



let toDoTasks = document.getElementById("to-do-tasks");
let inProgressTasks = document.getElementById("in-progress-tasks");
let doneTasks = document.getElementById("done-tasks");
function afficher() {
    toDoTasks.innerHTML = "";
    inProgressTasks.innerHTML = "";
    doneTasks.innerHTML = "";
   
    for (let i = 0; i < tasks.length; i++) {
        let taskNum =i +1;
        if (tasks[i].status == "To Do") {
            toDoTasks.innerHTML += `<button id="${tasks[i]["id"]}" class="w-100 p-3 border-0 border-bottom text-start tasBackcol">
                <!--w-100 for button inside the card to take 100% of the card width-->
                <div class="text-white-50">
                    <div class=""><i class="bi bi-question-circle text-teal-400 me-2"></i>${tasks[i]["title"]}</div>
                    <div class="ms-3">
                        <div class="">#${taskNum} created in ${tasks[i]["date"]}</div>
                        <div class="" title="${tasks[i]["description"]}">${tasks[i]["description"]}</div>
                    </div>
                    <div class="mt-3 ms-3">
                        <span class="p-1 px-2 rounded-3  text-white boBackcolor2">${tasks[i]["priority"]}</span>
                        <span class="p-1 px-2 rounded-3 ms-2 text-danger boBackcolor">${tasks[i]["type"]}</span>
                    </div>
                </div>
                <div class="text-end ">
                <i class="bi bi-trash text-red-500 ms-4" onclick="deleteTask(${i})"></i>
                </div>
            </button>`

        }
        if (tasks[i].status == "In Progress") {

            inProgressTasks.innerHTML += `<button id="${tasks[i]["id"]}" class="w-100 p-3 border-0 border-bottom text-start tasBackcol">
                <!--w-100 for button inside the card to take 100% of the card width-->
                <div class="text-white-50">
                    <div class=""><i class="bi bi-arrow-repeat text-teal-400 me-2"></i>${tasks[i]["title"]}</div>
                    <div class="ms-3">
                        <div class="">#${taskNum} created in ${tasks[i]["date"]}</div>
                        <div class="" title="${tasks[i]["description"]}">${tasks[i]["description"]}</div>
                    </div>
                    <div class="mt-3 ms-3">
                        <span class="p-1 px-2 rounded-3  text-white boBackcolor2">${tasks[i]["priority"]}</span>
                        <span class="p-1 px-2 rounded-3 ms-2 text-danger boBackcolor">${tasks[i]["type"]}</span>
                    </div>
                </div>
                <div class="text-end ">
                <i class="bi bi-trash text-red-500 ms-4" onclick="deleteTask(${i})"></i>
                </div>
            </button>`

        }
        if (tasks[i].status == "Done") {
            doneTasks.innerHTML += `<button id="${tasks[i]["id"]}" class="w-100 p-3 border-0 border-bottom text-start tasBackcol">
                <!--w-100 for button inside the card to take 100% of the card width-->
                <div class="text-white-50">
                    <div class=""><i class="bi bi-check-circle text-teal-400 me-2"></i>${tasks[i]["title"]}</div>
                    <div class="ms-3">
                        <div class="">#${taskNum} created in ${tasks[i]["date"]}</div>
                        <div class="" title="${tasks[i]["description"]}">${tasks[i]["description"]}</div>
                    </div>
                    <div class="mt-3 ms-3">
                        <span class="p-1 px-2 rounded-3  text-white boBackcolor2">${tasks[i]["priority"]}</span>
                        <span class="p-1 px-2 rounded-3 ms-2 text-danger boBackcolor">${tasks[i]["type"]}</span>
                    </div>
                </div>
                <div class="text-end ">
                <i class="bi bi-trash text-red-500 ms-4" onclick="deleteTask(${i})"></i>
                </div>
            </button>`
        }

    }
};
afficher();

function prepareLesDonne(id){
    alert(id)
}  
var Title = document.getElementById("titleId");
var Type = document.querySelector("input[name='type']:checked");
var Priority = document.getElementById("prt");
var Status = document.getElementById("stt")
var date = document.getElementById("date");
var Description = document.getElementById("desc");

function addTasks() {
    let task = {
        'title': Title.value,
        'type': Type.value,
        'priority': Priority.value,
        'status': Status.value,
        'date': date.value,
        'description': Description.value,
    };

    tasks.push(task);
    console.log(tasks);
    afficher();
};

function deleteTask(i) {
    tasks.splice(i,1);
    afficher();
    console.log(tasks);
};









