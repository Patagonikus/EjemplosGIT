a=[1,2,3,5,6,4,7,8,9];

function getMaxOfArray(a) {
  return Math.max.apply(null, a);
}

console.log(getMaxOfArray(a))
