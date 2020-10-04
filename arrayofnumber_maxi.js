let array = [1, 2, "a", 3, "b", 4, "x"]

function arrayofnumb(array) {
    let i = 0 ;
    let array2 = [];
    while (i < array.length){
        if (typeof(array[i])== "number"){
            array2.push(array[i]);
        }
        i=i+1;    
    }

    for (let j = 0; j < array2.length; j++){
        console.log(array2[j])
    }
}

arrayofnumb(array);
