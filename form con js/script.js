let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let pelicula = {
        titulo: document.getElementById("titulo").value,
        anio: document.getElementById("anio").value,
        genero: document.getElementById("genero").value,
        director: document.getElementById("director").value
    };

    agregarTabla(pelicula);

    e.target.reset("");
});

function agregarTabla(pelicula){
    let cuerpo_tabla = document.getElementById("cuerpo_tabla");
    let fila = document.createElement("tr");
    
    for(let key in pelicula){
        let campo = document.createElement("td");
        campo.textContent = pelicula[key];
        fila.appendChild(campo);
    }
    
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("btn", "btn-danger");
    botonEliminar.onclick = function() {
        cuerpo_tabla.removeChild(fila);
    };
    
    let botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar";
    botonEditar.classList.add("btn", "btn-warning");
    botonEditar.onclick = function() {
        document.getElementById("titulo").value = fila.children[0].textContent;
        document.getElementById("anio").value = fila.children[1].textContent;
        document.getElementById("genero").value = fila.children[2].textContent;
        document.getElementById("director").value = fila.children[3].textContent;
        cuerpo_tabla.removeChild(fila);
    };

    let btnEliminar = document.createElement("td");
    btnEliminar.appendChild(botonEliminar);

    let btnEditar = document.createElement("td");
    btnEditar.appendChild(botonEditar);

    fila.appendChild(btnEliminar);
    fila.appendChild(btnEditar);
    cuerpo_tabla.appendChild(fila);
}