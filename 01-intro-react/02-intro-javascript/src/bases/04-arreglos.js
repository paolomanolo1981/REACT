const arregla=[1,2,3,4];
//arregla.push(1);
//arregla.push(2);
//arregla.push(3);
//arregla.push(4);

let  arregla2=[...arregla,5];
//
//arregla2.push(5);

const arreglo3=arregla2.map((numero)=>{
    return numero * 2;
});

console.log(arregla);
console.log(arregla2);
console.log(arreglo3);