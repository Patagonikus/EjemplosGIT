let a=[1,2,3,5,6,4,7,8,9]

function max(a){ 

        let max = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i]> i) {
                max = a[i];
            }
            
        }
        

        return max;

}

console.log("El mayor numero del array es: " + max(a))