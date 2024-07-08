const tareas = [];
const entertarea = document.querySelector("#entertarea");
const botonAgregar = document.querySelector("#botonAgregar");
const listadetareas = document.querySelector("#listadetareas");
const contadorCompletadas = document.querySelector("#contadorCompletadas");
const botonborrar = document.querySelector("#botonborrar");

botonAgregar.addEventListener("click", () => {
    const nombreTarea = entertarea.value;
    if (nombreTarea) {
        tareas.push({ nombre: nombreTarea, completada: false });
        entertarea.value = "";
        actualizarLista();
    }
});

function actualizarLista() {
    let html = "";
    for (let i = 0; i < tareas.length; i++) {
        html += 
        `
        <li>
            <input type="checkbox" id="tarea${i}" name="tarea${i}" ${tareas[i].completada ? 'checked' : ''}/>
            <label for="tarea${i}" class="${tareas[i].completada ? 'completed' : ''}">${tareas[i].nombre}</label>
        </li>`;
    }
    listadetareas.innerHTML = html;

    // Agregamos evento para cada checkbox
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener("change", () => {
            tareas[index].completada = checkbox.checked;
            actualizarLista();
            actualizarContador();
        });
    });

    actualizarContador();
}




function actualizarContador() {
const tareasCompletadas = tareas.filter(tarea => tarea.completada).length;
contadorCompletadas.textContent = tareasCompletadas;
}