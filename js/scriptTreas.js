const boton = document.getElementById("agregar");

let tareas = [];

boton.onclick = function(){
    agregarTarea();
}

function agregarTarea(){
    let campo = document.getElementById("tarea");
    let tarea = campo.value;
    if (tarea === "" ) {
        alert("esta vacio el campo");
    }else{

        let lista = document.getElementById("lista_tareas");
        tareas.push(tarea);
        let li = document.createElement("li");

        li.innerHTML = tarea;
        let boton_eliminar = document.createElement("button")
        boton_eliminar.innerHTML = "Eliminar";
        boton_eliminar.class


        li.onclick =function(){
            li.classList.toggle("tachado");
        }

        lista.appendChild(li);
    }
}