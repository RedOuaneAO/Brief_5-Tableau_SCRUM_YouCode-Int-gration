
let toDoTasks = document.getElementById("to-do-tasks");
let inProgressTasks = document.getElementById("in-progress-tasks");
let doneTasks = document.getElementById("done-tasks");
                                                                        //tasksCounters
let toDoCount = document.getElementById("to-do-tasks-count");
let progressCount = document.getElementById("in-progress-tasks-count");
let doneCount = document.getElementById("done-tasks-count");

function display() {
    toDoTasks.innerHTML = "";
    inProgressTasks.innerHTML = "";
    doneTasks.innerHTML = "";
    toDC = 0;
    progC = 0;
    doneC = 0;
    for (let i = 0; i < tasks.length; i++) {
        let taskNum = i + 1;
        if (tasks[i].status == "To Do") {
            toDoTasks.innerHTML += `<button class="w-100 p-3 border-0 border-bottom text-start tasBackcol" data-bs-toggle="modal" data-bs-target="#modal-task" onclick="editTask(${i})">
                <!--w-100 for button inside the card to take 100% of the card width-->
                <div class="text-white-50">
                    <div class=""><i class="bi bi-question-circle text-teal-400 me-2"></i>${tasks[i]["title"]}</div>
                    <div class="ms-3">
                        <div class="">#${taskNum} created in ${tasks[i]["date"]}</div>
                        <div class="" title="${tasks[i]["description"]}">${tasks[i]["description"].slice(0, 40)}...</div>
                    </div>
                    <div class="mt-3 ms-3">
                        <span class="p-1 px-2 rounded-3  text-white boBackcolor2">${tasks[i]["priority"]}</span>
                        <span class="p-1 px-2 rounded-3 ms-2 text-danger boBackcolor">${tasks[i]["type"]}</span>
                    </div>
                </div>
            </button>`
            toDC++;
        }
        if (tasks[i].status == "In Progress") {

            inProgressTasks.innerHTML += `<button class="w-100 p-3 border-0 border-bottom text-start tasBackcol" data-bs-toggle="modal" data-bs-target="#modal-task" onclick="editTask(${i})">
                <!--w-100 for button inside the card to take 100% of the card width-->
                <div class="text-white-50">
                    <div class=""><i class="bi bi-arrow-repeat text-teal-400 me-2"></i>${tasks[i]["title"]}</div>
                    <div class="ms-3">
                        <div class="">#${taskNum} created in ${tasks[i]["date"]}</div>
                        <div class="" title="${tasks[i]["description"]}">${tasks[i]["description"].slice(0, 40)}...</div>
                    </div>
                    <div class="mt-3 ms-3">
                        <span class="p-1 px-2 rounded-3  text-white boBackcolor2">${tasks[i]["priority"]}</span>
                        <span class="p-1 px-2 rounded-3 ms-2 text-danger boBackcolor">${tasks[i]["type"]}</span>
                    </div>
                </div>
            </button>`
            progC++;
        }
        if (tasks[i].status == "Done") {
            doneTasks.innerHTML += `<button class="w-100 p-3 border-0 border-bottom text-start tasBackcol" data-bs-toggle="modal" data-bs-target="#modal-task" onclick="editTask(${i})">
                <!--w-100 for button inside the card to take 100% of the card width-->
                <div class="text-white-50">
                    <div class=""><i class="bi bi-check-circle text-teal-400 me-2"></i>${tasks[i]["title"]}</div>
                    <div class="ms-3">
                        <div class="">#${taskNum} created in ${tasks[i]["date"]}</div>
                        <div class="" title="${tasks[i]["description"]}">${tasks[i]["description"].slice(0, 40)}...</div>
                    </div>
                    <div class="mt-3 ms-3">
                        <span class="p-1 px-2 rounded-3  text-white boBackcolor2">${tasks[i]["priority"]}</span>
                        <span class="p-1 px-2 rounded-3 ms-2 text-danger boBackcolor">${tasks[i]["type"]}</span>
                    </div>
                </div>
            </button>`
            doneC++;
        }
    }
    toDoCount.innerText = toDC;
    progressCount.innerText = progC;
    doneCount.innerText = doneC;

};
display();
/*---------------------------------------------------------addFunction---------------------------------------------*/
var Title = document.getElementById("titleId");
var Type = document.getElementById("feature");
var Priority = document.getElementById("prt");
var Status = document.getElementById("stt")
var date = document.getElementById("date");
var Description = document.getElementById("desc");

function addTasks() {

    let type;
    if (Type.checked) {
        type = 'Feature';
    } else {
        type = 'Bug';
    }
    let task = {
        'title': Title.value,
        'type': type,
        'priority': Priority.value,
        'status': Status.value,
        'date': date.value,
        'description': Description.value,
    };

    tasks.push(task);
    display();
    reload();
};

function createTask(){               
    $('#modal-task').modal('show');
    document.querySelector('.modal-footer').innerHTML=`
    <button type="button" class="btn btn-white text-danger" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
	<button type="button" class="btn btn-danger" id="saveBtn" data-bs-dismiss="modal" onclick="addTasks()">Save</button>
    `
    reload();
}
/*---------------------------------------------------------deleteFunction---------------------------------------------*/
function deleteTask(i) {
    tasks.splice(i, 1);
    display();
};
/*---------------------------------------------------------reload function---------------------------------------------*/

function reload() {                  //when i submit the form it get empty              
    Title.value = '';
    Type.value = '';
    Priority.value = '';
    Status.value = '';
    date.value = '';
    Description.value = '';
}
/*---------------------------------------------------------EditeFunction---------------------------------------------*/
function editTask(i) {
    document.querySelector('.modal-footer').innerHTML=`
    <button type="button" class="btn btn-white text-danger" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
    <button type="button" class="btn btn-white text-danger" data-bs-dismiss="modal" aria-label="Close" onclick="deleteTask(${i})">Delete</button>
	<button type="button" class="btn btn-danger" id="saveBtn" data-bs-dismiss="modal" onclick="update(${i})">Update</button>
    `
    Title.value = tasks[i].title;
    // Type.value = tasks[i].type;
    if(tasks[i].type=="Feature"){
        feature.checked=true;
    }else{
        bug.checked=true;
    }
    Priority.value = tasks[i].priority;
    Status.value = tasks[i].status;
    date.value = tasks[i].date;
    Description.value = tasks[i].description;
}
/*---------------------------------------------------------updateFinction---------------------------------------------*/
function update(i){
    let type;
    if (Type.checked) {
        type = 'Feature';
    } else {
        type = 'Bug';
    }
    let task = {
        'title': Title.value,
        'type': type,
        'priority': Priority.value,
        'status': Status.value,
        'date': date.value,
        'description': Description.value,
    };
    tasks[i]=task;
    reload();
    display();
}