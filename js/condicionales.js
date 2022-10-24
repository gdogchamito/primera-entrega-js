let nombre = prompt('Ingrese su nombre').toLowerCase()

let pais = prompt('Ingrese su país').toLowerCase ()
    if (pais == 'chile'){
        console.log ('Ingreso correcto')
        alert ('Hola ' + nombre + ' bienvenido a nuestro sitio');
    }
    
    else {
        alert ('Nuestros servicios no están en ese país');
    }