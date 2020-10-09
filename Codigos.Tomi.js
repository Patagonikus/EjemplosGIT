let listadoNum = [0,1,2,3,'4',55,'300'], a=[1,2,3,5,6,4,7,8,9]; 

function getMaxOfArray(array) {
    return Math.max.apply(null, array);
  }

function ArrayToInt(listado){
    let todosInt = [];
    console.log(listado.length);
    for( let i = 0; i < listado.length; i++){
        if(typeof listado[i] != 'number'){
            todosInt[i]=parseInt(listado[i],10);
            if(isNaN(todosInt[i])){
                console.log("por favor ingrese solo numeros o strings con numeros");
            }
        }
        else{
            todosInt[i]=listado[i];
        }
    }
    return todosInt;
}

console.log(getMaxOfArray(a));
console.log(ArrayToInt(listadoNum));
console.log("Rodri estuvo aqui");
console.log("Emi");