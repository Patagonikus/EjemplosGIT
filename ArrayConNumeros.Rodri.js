let arraycomp = [8,"hola",10,56,"chau",420,true]

function num_array (arraycompleto)
{
    let arraynum=[];
    for (let index = 0; index < arraycompleto.length; index++) {
        //if( !isNaN(arraycompleto[index]))esta no debido a qeu con true retorna truee
        if(typeof(arraycompleto[index])== "number")
        {
            arraynum.push(arraycompleto[index]);
        }
        
    }
    return arraynum;
}

console.log(num_array(arraycomp));