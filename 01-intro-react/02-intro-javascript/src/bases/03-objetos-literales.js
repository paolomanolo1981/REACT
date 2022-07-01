const persona={
    nombre:"Tony",
    apellido:"Stark",
    edad:45,
    direccion:{
        ciudad:"New York",
        zip:453453,
        lat:14.23333,
        lon:32.5346
    }
};
console.log(//{
    //persona:persona
    persona
//}
);

const persona2={
   ...persona
};

persona2.nombre="Peter";
 
console.log(persona2);
/*

*/