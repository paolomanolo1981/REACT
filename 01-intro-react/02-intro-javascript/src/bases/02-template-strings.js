const nombre="Paolo";
const apellido="Pecho";
//const nombreCompleto=nombre + ' ' + apellido;
const nombreCompleto=` 
${nombre} 
${apellido}
//${1+1}
` ;
console.log(nombreCompleto);
 

function getSaludo(nombre){
    return `Hola Mundo ` + nombre;
}

console.log(`Esto es un texto: ${getSaludo(nombre)}`);