let arrayB = [1, "a", 2, "3",8,true,false, 4, '5', 6,"q","7"];

function purgar(unArray){
    let arrayNumerico = [];
    for (let i = 0; i < unArray.length; i++){
        if (typeof(unArray[i])=="number"){
            arrayNumerico.push(unArray[i]);
        }
    }
    return arrayNumerico;
}

function maximo(unArray) {
    let elMayor = unArray[0] || 0;
    for (let i = 1; i < unArray.length; i++) {

        if (unArray[i] > elMayor) {
            elMayor = unArray[i];
        }

    }
    return elMayor;
}

console log("resultados de Emiliano:");
console.log(purgar(arrayB));
console.log(maximo(purgar(arrayB)));
