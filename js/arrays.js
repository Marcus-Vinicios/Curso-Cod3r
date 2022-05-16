const array = [7.7, 8.9, 6.3, 9.2]
console.log(array[0], array[3])
console.log(array[4])

array[4] = 10
console.log(array)
console.log(array. length)

array.push({id: 3}, false, null, 'teste')
console.log(array)

console.log(array.pop())
delete array[0]
console.log(array)
console.log(typeof array)