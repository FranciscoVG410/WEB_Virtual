const boton = document.getElementById("agregar");
let tareas = [];

boton.onclick = function () {
    agregarTarea();
};

function agregarTarea() {
    let campo = document.getElementById("tarea");
    let tarea = campo.value.trim(); // Elimina espacios en blanco

    if (tarea === "") {
        alert("El campo está vacío");
        return;
    }

    let lista = document.getElementById("lista_tareas");
    tareas.push(tarea);

    let li = document.createElement("li");
    li.innerHTML = tarea;

    let botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = "Eliminar";
    botonEliminar.classList.add("eliminar");

    botonEliminar.onclick = function () {
        lista.removeChild(li);
    };

    li.onclick = function () {
        li.classList.toggle("tachado");
    };

    li.appendChild(botonEliminar);
    lista.appendChild(li);

    campo.value = ""; // Limpia el campo de entrada
}