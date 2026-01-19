    let tasks = [];

const taskInput = document.getElementById("teskInput");
const taskList = document.getElementById("tesk-list");
const addBtn = document.getElementById("newTask");

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") return;

    tasks.push({
        text: text,
        completed: false
    });

    taskInput.value = "";
    updateTasksList();
}


function toggleTaskComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
}


function deleteTask(index) {
    tasks.splice(index, 1);
    updateTasksList();
}

function editTask(index) {
    const newText = prompt("Edit your task", tasks[index].text);
    if (newText !== null && newText.trim() !== "") {
        tasks[index].text = newText.trim();
        updateTasksList();
    }
}


function updateTasksList() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="teskItem">
                <div class="tesk ${task.completed ? "completed" : ""}">
                    <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""}>
                    <p>${task.text}</p>
                </div>
                <div class="icons">
                    <img src="./img/edit.png" onclick="editTask(${index})">
                    <img src="./img/bin.png" onclick="deleteTask(${index})">
                </div>
            </div>
        `;

        li.querySelector(".checkbox")
            .addEventListener("change", () => toggleTaskComplete(index));

        taskList.appendChild(li);
    });

    updateStats();
}


function updateStats() {
    const completed = tasks.filter(t => t.completed).length;
    const total = tasks.length;

    document.getElementById("number").innerText = `${completed} / ${total}`;

    const progress = total === 0 ? 0 : (completed / total) * 100;
    document.getElementById("progress").style.width = progress + "%";
}


addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    addTask();
});
