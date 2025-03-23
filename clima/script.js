const api_key = "API_KEY";

let boton = document.getElementById("btn_consultar");

boton.onclick = function(){
	
	let ciudad = document.getElementById("campo_ciudad").value;
	let units = "metric"
	let lang = "es";
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_key}&units=${units}&lang=${lang}`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			cargar_datos(data);
		}) 
		.catch(error => {
			console.log("algo pasó", error);
		});


};

function cargar_datos(data){
	let campo_temp = document.getElementById("label_temp");
	let campo_desc = document.getElementById("label_desc");
	let campo_hum = document.getElementById("label_humedad");
	let temperatura = data.main.temp;

	let descripcion = data.weather[0].description;
	let humedad = data.main.humidity;

	campo_temp.innerHTML = temperatura;
	campo_desc.innerHTML = descripcion;
	campo_hum.innerHTML = humedad
}