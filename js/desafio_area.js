const PI = 3.14
let raio = 6

let area = (raio * raio) * PI

console.log("A area do raio é equivalente a: "+ area +"m²")

area = area * 100
console.log("A area do raio é equivalente a: "+ area +"cm²")

area = area * 1000
console.log("A area do raio é equivalente a: "+ area +"mm²")

area = area / 1000
console.log("A area do raio é equivalente a: "+ area +"km²")

area = area / 100
console.log("A area do raio é equivalente a: "+ area +"km²")