const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 10;
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
};

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
    llenarSelect();
});

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = parseInt(e.target.value);
    filtrarAuto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});

function mostrarAutos(autos){

    limpiarHTML();

    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHtml = document.createElement('P')
        autoHtml.textContent = `${marca} ${modelo} ${year} ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}`;
        
        resultado.appendChild(autoHtml);
    });  
}

function limpiarHTML(){
    while (resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelect(){

    for(let i = max; i >= min;  i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;

        year.appendChild(opcion);
        
    }
}

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if(resultado.length)    
        mostrarAutos(resultado);
    else
        noResultado();
    
        
}  

function noResultado (){
    const respuesta = document.createElement('P');
    respuesta.textContent = 'No hay resultados';
    limpiarHTML();
    resultado.appendChild(respuesta);
}

function filtrarMarca(autos){
    const {marca} = datosBusqueda;
    if(marca) return autos.marca === marca;
    return autos;
}

function filtrarYear(autos){
    const {year} = datosBusqueda;
    if(year) return autos.year === year;
    return autos;
}

function filtrarMinimo(autos){
    const {minimo} = datosBusqueda;
    if(minimo) return autos.precio >= minimo;
    return autos;
}

function filtrarMaximo(autos){
    const {maximo} = datosBusqueda;
    if(maximo) return autos.precio <= maximo;
    return autos;
}

function filtrarPuertas(autos){
    const {puertas} = datosBusqueda;
    if(puertas) return autos.puertas === puertas;
    return autos;
}

function filtrarTransmision(autos){
    const {transmision} = datosBusqueda;
    if(transmision) return autos.transmision === transmision;
    return autos;
}

function filtrarColor(autos){
    const {color} = datosBusqueda;
    if(color) return autos.color === color;
    return autos;
}