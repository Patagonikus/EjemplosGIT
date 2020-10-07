let miArray = [1, "a", "3", 2, 3, 8, 4, 5, 6,"q","5"];
// let miArray = [1,2,2,3];

function suma(miArray){
    let total = 0;
    for (let i = 0; i < miArray.length; i++){
        if (!isNaN(miArray[i])){
            total = total + parseInt(miArray[i]);
        }
    }
    return total;
}

console.log(suma(miArray));