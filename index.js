// El siguiente archivo contiene el script que lanzamos a rurive.com en su buscador para filtrar y mostrar los resultados de la búsqueda.

// PASO 1 - Revisamos la URL, si hay existe el parámetro filtros, entonces lo guardamos en la variable filtros.
const urlParams = new URLSearchParams(window.location.search);
const filtros = urlParams.get('filtros');

console.log(filtros);