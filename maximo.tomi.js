//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/max
a=[1,2,3,5,6,4,7,8,9];

function getMaxOfArray(a) {
  return Math.max.apply(null, a);
}

console.log(getMaxOfArray(a))
