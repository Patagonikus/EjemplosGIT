let miArray = [1,2,3,8,4,5,6];

function maximo(miArray){
    let elMayor = miArray[0];
    for (let i = 0; i < miArray.length; i++) {
        
        if (miArray[i] > elMayor) {
            elMayor = miArray[i];
        }
        
    }
return elMayor;
}

console.log("El mayor valor del array es: "+ maximo(miArray));
