const num1 = [1,2,3]
const num2 = [4,5,6]
const num3 = num1.concat(num2, [7,8,9], 'clecio')
console.log(num3)

const num4 = [...num1, 'clecio', ...num2, ...[10,11,12]]
console.log(num4)