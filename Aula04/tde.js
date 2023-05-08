
function numerosPares(){
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
          console.log(i);
        }
      }
    
}
numerosPares(); 

console.log("-------------------------------------------");

function totalDeNumeros(array){

    let a = 0;
    for(let i=0; i<array.length; i++){
        a += array[i]
    }

    return a;
    
}

let numero = [2,4,6,8,10];
let resultado = totalDeNumeros(numero);
console.log(resultado);

console.log("-------------------------------------------");

function removeNegativos(array) {
    return array.filter(function(numero) {
      return numero >= 0;
    });
  }

let numeros = [1, -2, 3, -4, 5, -6, 13, -8];
let numerosSemNegativos = removeNegativos(numeros);
console.log(numerosSemNegativos); 
