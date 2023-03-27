// El siguiente archivo contiene el script que lanzamos a rurive.com en su buscador para filtrar y mostrar los resultados de la búsqueda.



//Wait for the DOM to be ready and all scripts to be loaded
var Webflow = Webflow || [];
Webflow.push(function () {
    const urlParams = new URLSearchParams(window.location.search);

    // PASO 1 - Si existe el parametro imagen, sustituimos la imagen del banner principal por la proporcionada en el parametro tras un switch case
    const imagen = urlParams.get('imagen');
    if (imagen) {
        let style = '';
        //Coge el texto-hero del Dom
        const textoHero = document.querySelector('#texto-hero');
        switch (imagen) {
            case 'Navidad':
                style = 'background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://uploads-ssl.webflow.com/61af16b74b86673c639a10c8/64218ae778f8c232fd929126_Navidad.jpg);';
                textoHero.textContent = 'Casas Rurales disponibles en Navidad';
                break;
            case 'ss':
                style = 'background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://uploads-ssl.webflow.com/61af16b74b86673c639a10c8/64218ae7e001a2d9fef0dc12_Semana%20santa.jpg);';
                textoHero.textContent = 'Alojamientos disponibles en Semana Santa';
                break;
            case 'nochevieja':
                style = 'background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://uploads-ssl.webflow.com/61af16b74b86673c639a10c8/64218ae678f8c2b189929124_Nochevieja.jpg);';
                textoHero.textContent = 'Casas Rurales disponibles en Nochevieja';
                break;
            case 'pilar':
                style = 'background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://uploads-ssl.webflow.com/61af16b74b86673c639a10c8/64218ae751bd3f75fcbf79e1_Puente%20del%20pilar.jpg);';
                textoHero.textContent = 'Tu casa para el Puente del Pilar';
                break;
            case 'ciudad':
                    style = 'background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://uploads-ssl.webflow.com/61af16b74b86673c639a10c8/642177e90c33f72353deba41_Visita%20Pamplona.jpg);';
                    textoHero.textContent = 'Disfruta de una escapada a la ciudad';
                    break;
            default:
                break;
        }

        // Recuperamos el elemento del DOM que contiene la imagen y le cambiamos la propiedad de su clase css a la proporcionada en el switch case
        const imagenBanner = document.querySelector('#banner-imagen');

        imagenBanner.setAttribute('style', style + ' background-size: cover;');
    }


    // PASO 2 - Revisamos la URL, si hay existe el parámetro filtros, entonces lo guardamos en la variable filtros.
    const filtros = urlParams.get('filtros');

    // Descomponemos los filtros en un array de filtros
    if (filtros) {
        const filtrosArray = filtros.split(',');

        // Recorremos el array de filtros y los recuperamos del DOM por el atributo filter-by = filtro
        //Si encontramos en el DOM un input con el atributo filter-by = filtro, entonces lo marcamos como checked

        filtrosArray.forEach(filtro => {
            const input = document.querySelector(`[filter-by="${filtro}"]`);
            if (input) {
                input.click();
            }
        });
    }

});





