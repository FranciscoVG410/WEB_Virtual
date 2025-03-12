let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
    console.log(document.getElementById)
    let pelicula = {
        titulo: document.getElementById("titulo").value,
        anio: document.getElementById("anio").value,
        genero: document.getElementById("genero"),
        director: document.getElementById("director")
    };

    agregarTabla(pelicula);
});

function agregarTabla(pelicula){
    let cuerpo_tabla = document.getElementById("cuerpo_tabla");

    let fila = document.createElement("tr");

    for(let key in pelicula){
        campo.textContent = pelicula[key];
        fila.appendChild(campo);
    }
    cuerpo_tabla.appendChild(fila);
}