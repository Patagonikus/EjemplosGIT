let miArray = [1, "a", 2, "3",true,false, 4, '5', 6,"q","7"];
// let miArray = [1,2,2,3];

function purgar(miArray){
    let arrayNumerico = [];
    for (let i = 0; i < miArray.length; i++){
        // if (!isNaN(miArray[i])){
        //     arrayNumerico.push(parseInt(miArray[i])); 
        // }
        if (typeof(miArray[i])=="number"){
            arrayNumerico.push(miArray[i]);
        }
    }
    return arrayNumerico;
}

console.log(purgar(miArray));