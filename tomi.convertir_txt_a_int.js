let listadoNum = [0,1,2,3,'4',55,'300'];

function ArrayToInt(listado){
    if (listado.length == 0){
        return "por favor carga algo kliao";
    }
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

console.log(ArrayToInt(listadoNum));