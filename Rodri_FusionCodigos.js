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
function max(a){ 
    let max = 0, aPurgado = num_array(a);
    for (let i = 0; i < aPurgado.length; i++) {
        if (aPurgado[i]> i) {
            max = a[i];
        }  
    }
    return max;

}

console.log("El mayor numero del array es: " +max(arraycomp) );
console.log("Array purgado: " +num_array(arraycomp) );
console.log("Soy Rodri");