const numeroUno = document.querySelector('.uno');
const numeroDos = document.querySelector('.dos');
const numeroTres = document.querySelector('.tres');
const numeroCuatro = document.querySelector('.cuatro');
const numeroCinco = document.querySelector('.cinco');
const calificacion = document.querySelector('.califi');

const botonEnviar = document.querySelector('.btn-1');
const mensajePrimero = document.querySelector('.card_initial')
const mensajeSegundo = document.querySelector('.card_thank');
const mensajeNumeroCalifi = document.querySelector('.text_card_1');

numeroUno.addEventListener('click', () =>{
    limpiarCalifi();
    califiMensaje('numeroUno');
    numeroUno.classList.add('active');
})

numeroDos.addEventListener('click', () =>{
    limpiarCalifi();
    califiMensaje('numeroDos');
    numeroDos.classList.add('active');
})

numeroTres.addEventListener('click', () =>{
    limpiarCalifi();
    califiMensaje('numeroTres');
    numeroTres.classList.add('active');
})

numeroCuatro.addEventListener('click', () =>{
    limpiarCalifi();
    califiMensaje('numeroCuatro');
    numeroCuatro.classList.add('active');
})

numeroCinco.addEventListener('click', () =>{
    limpiarCalifi();
    califiMensaje('numeroCinco');
    numeroCinco.classList.add('active');
})

botonEnviar.addEventListener('click', () =>{
    enviarMensaje();
    mensajeEnviado();
    
})

// FUNCION QUE SELECCIONA LA CALIFICACION DEL SOPORTE

function limpiarCalifi() {

    numeroUno.classList.remove('active');
    numeroDos.classList.remove('active');
    numeroTres.classList.remove('active');
    numeroCuatro.classList.remove('active');
    numeroCinco.classList.remove('active');
}

// FUNCION QUE QUITA EL NONE PARA PODEAR 
// MONSTRAR EL MENSAJE DE GRACIAS

function mensajeEnviado() {
    mensajePrimero.style.display = 'none';
}

// FUNCION QUE OCULTA EL
// PRIMER MENSAJE Y MUESTRA EL SEGUNDO MENSAJE

function enviarMensaje(){
    
    mensajeSegundo.style.display = 'block';
}

// MENSAJE QUE MUESTRA EL NUMERO DE CALIFICACION AL SERVICIO 

function califiMensaje(numeroCali){

    switch (numeroCali) {
        case 'numeroUno':
            mensajeNumeroCalifi.innerHTML = `You selected 1 out of 5`
            break;
        case 'numeroDos':
            mensajeNumeroCalifi.innerHTML = `You selected 2 out of 5`
            break;
        case 'numeroTres':
            mensajeNumeroCalifi.innerHTML = `You selected 3 out of 5`
            break;
        case 'numeroCuatro':
            mensajeNumeroCalifi.innerHTML = `You selected 4 out of 5`
            break;
        case 'numeroCinco':
            mensajeNumeroCalifi.innerHTML = `You selected 5 out of 5`
            break;
        default:
            break;
    }
}

