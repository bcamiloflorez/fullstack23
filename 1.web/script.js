<<<<<<< HEAD
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
=======
let tareas = [];
//dónde quiero renderizar?
let todolist = document.getElementById("todo-list");

let agregarTareaBtn = document.getElementById("add-btn");
let tareaTxt = document.getElementById("todo-input");
let eliminarTareaBtn = document.getElementById("eliminarTarea");
const inputTxt = document.getElementById("todo-input");

/*
let titulo = document.getElementsByTagName("h1")[0];

titulo.addEventListener("click", () => {
  console.log("click aqui");
}) */
tareas.push({
  nombre: "Hacer aseo",
  estado: false,
});
tareas.push({
  nombre: "Programar",
  estado: true,
});

//agregar el listener

agregarTareaBtn.addEventListener("click", () => {
  agregarTarea({
    nombre: tareaTxt.value,
    estado: false,
  });
  renderizarTareas();
});

inputTxt.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    tareas.push({
      nombre: event.target.value,
      estado: false,
    });
    event.target.value = "";
    renderizarTareas();
  }
});

function agregarTarea(tarea) {
  tareas.push(tarea);
}

function eliminarTarea() {
  tareas.pop();
}

function renderizarTareas() {
  //qué quiero renderizar?
  todolist.innerHTML = "";
  tareas.forEach((tarea) => {
    todolist.innerHTML += `
    <li>
       <div class="todo-item">
         <input type="checkbox" ${tarea.estado ? "checked" : ""} />
         <span>${tarea.nombre}</span>
       </div>
      <button id="eliminarTarea">✖</button>
    </li>
    `;
  });
}

renderizarTareas();
>>>>>>> fa910e6c608c6af43816a0dee274925de928ffef
