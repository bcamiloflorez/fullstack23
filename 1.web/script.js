let tareas = [];
//dónde quiero renderizar?
let todolist = document.getElementById("todo-list");

let agregarTareaBtn = document.getElementById("add-btn");
let tareaTxt = document.getElementById("todo-input");
let eliminarTareaBtn = document.getElementById("eliminarTarea");
const inputTxt = document.getElementById("todo-input");
let filtroActual = "all"
let filterAll = document.getElementById("filter-all");
let filterActive = document.getElementById("filter-active");
let filterCompleted = document.getElementById("filter-completed");
let filterClear = document.getElementById("clear-completed");

tareas.push({
  nombre: "Hacer aseo",
  estado: false,
});
tareas.push({
  nombre: "Programar",
  estado: true,
});

console.log("tareas array",tareas[1].nombre.includes('mar'))
agregarTareaBtn.addEventListener("click", () => {
  agregarTarea({
    nombre: tareaTxt.value,
    estado: false,
  });
  renderizarTareas();
});

/*eliminarTareaBtn.addEventListener("click", () => {
  eliminarTarea();
  renderizarTareas();
});*/

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

todolist.addEventListener("click",(evento)=>{
  if (evento.target.tagName=="INPUT" || evento.target.tagName=="SPAN") {
    const index = evento.target.dataset.index
    tareas[index].estado = !tareas[index].estado
  }
})

filterAll.addEventListener("click", () => {
  filtroActual = "all";
  renderizarTareas()
})
filterActive.addEventListener("click", () => {
  filtroActual = "active";
  renderizarTareas()
})
filterCompleted.addEventListener("click", () => {
  filtroActual = "completed";
  renderizarTareas()
})
filterClear.addEventListener("click", () => {
  tareas = tareas.filter(t=> !t.estado)
  filtroActual = "clear";
  renderizarTareas()
})

function agregarTarea(tarea) {
  tareas.push(tarea);
}

function eliminarTarea() {
  tareas.pop();
  renderizarTareas();
}

function renderizarTareas() {
  //qué quiero renderizar?
  todolist.innerHTML = "";
  let tareasFiltro = tareas.filter((t) =>{
    if(filtroActual === "active") return !t.estado;
    if(filtroActual === "completed") return t.estado;
    if(filtroActual === "clear") return !t.estado;
    return true;
  })


  tareasFiltro.forEach((tarea,index) => {
    console.log(tarea, index)
    todolist.innerHTML += `
    <li>
       <div class="todo-item">
         <input type="checkbox" ${tarea.estado ? "checked" : ""}  data-index="${index}"/>
         <span>${tarea.nombre}</span>
       </div>
      <button id="eliminarTarea">X</button>
    </li>
    `;
  });
}

renderizarTareas();