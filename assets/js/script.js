const resumenTareas = document.getElementById("listaTareas")  //OK
const newInput = document.getElementById("tareaInput") //OK
const btnAdd = document.getElementById("boton1") //ok
const totalTask = document.getElementById("totalTareas"); //ok
const completeTask = document.getElementById("totalRealizadas");//ok
let count=3;


const arrayTareas = [
    {id: 1,tarea: 'Ir a comprar al supermercado', estado: false},
    {id: 2,tarea: 'Ir a la Feria a comprar verduras',estado: false},
    {id: 3,tarea: 'Regar las plantas',estado: false}
]

function mostrarTareas() {
    let bucle = ""; 
    for (let tarea of arrayTareas) {
        bucle += 
        `<tr>
        <td>${tarea.id}</td>
            <td>${tarea.tarea}</td>
            <td><input type="checkbox" ${tarea.estado ? 'checked' : ''} onchange="changeStatus(${tarea.id}, this.checked)"></td>
            <td><button onclick="deleteTask(${tarea.id})" class="delete-button">Eliminar</button></td>        
        </tr>`;
    }
    totalTask.textContent = `${arrayTareas.length}`; 
    resumenTareas.innerHTML = bucle; 
    completeTask.textContent = `${arrayTareas.filter(i => i.estado).length}`;
}
mostrarTareas();

// funcion borrar tarea
function deleteTask(id) {
    const index = arrayTareas.findIndex((i) => i.id == id)
    arrayTareas.splice(index, 1)
    mostrarTareas();
}

//funcion cambiar status
function changeStatus(id, nuevoEstado) {
    const task = arrayTareas.find(i => i.id == id);
    if (task) {
        task.estado = nuevoEstado;
        mostrarTareas();
    }
}  

btnAdd.addEventListener("click", () => { 
    const tarea = newInput.value; 
    if (tarea !== "") {
        count++; 
        arrayTareas.push({ id: count, tarea: tarea, estado: false });
        newInput.value = ""; //ok
        mostrarTareas();
    }
}
);


