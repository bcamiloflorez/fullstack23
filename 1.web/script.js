let tasks = []

tasks.push({
    id: 1,
    name: "documentar planning",
    estado: true
});
tasks.push({
    id: 2,
    name: "Historias de usuario",
    estado: false
});

let addTaskBtn = document.getElementById("add-btn");
let todoList = document.getElementById("todo-list");

addTaskBtn.addEventListener("click", () => {
    addTask()
});

renderizarTareas()

console.log("array tareas", tasks)

function renderizarTareas() {
    todoList.innerHTML = "";
    tasks.forEach(task => {
        todoList.innerHTML += `
            <li>
                <div class="todo-item">
                <input type="checkbox" ${task.estado ? 'checked' : ''} >
                <span>${task.name}</span>
                </div>
                <button>✖</button>
            </li>
            `
    })
}

function addTask() {
    let id = tasks.length + 1
    let nameTaskNew = document.getElementById("todo-input").value
    tasks.push({
        id: id,
        name: nameTaskNew,
        estado: false
    })
    renderizarTareas()
}