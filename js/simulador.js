let seleccionPropiedad = prompt('Seleccione una propiedad: Casa, Departamento, Terreno').toLowerCase()

if (seleccionPropiedad == 'casa') {
     console.log(nombre + ' seleccionaste una casa');
 } 
 else if (seleccionPropiedad == 'departamento') {
     console.log(nombre + 'seleccionaste un departamento');
 } 
 else if (seleccionPropiedad == 'terreno') {
     console.log(nombre +' seleccionaste un terreno');
 } 
 else {
     console.log( nombre +' Ingreso un valor incorrecto');
    }    