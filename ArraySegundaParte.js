primerMatriz = [4, 7, 8, 16, 18];
var cadena = ["papa", "mama", "manzana"];
const tercerMatriz = [1, 5, 7, 8, 10];

/* SOME*/

function Prueba(elemento) {
  return elemento >= 10;
}
primerMatriz.some(Prueba);


const even = (element) => element % 2 === 0;

console.log(tercerMatriz.some(even));


/* REVERSO */ 


var cadena = ["papa", "mama", "manzana"];
var str = cadena.join();
var str ;
[].map.call(str, function(x) {
  return x;
}).reverse().join(''); 

