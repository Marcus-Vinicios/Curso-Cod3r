//usando Var;
for(var i=0;i<10;i++){
    console.log(i)
}
console.log('i =', i)

const funcs = []
for(var i=0;i<10;i++){
    funcs.push(function() {
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

//usando Let;
for(let i=0;i<10;i++){
    console.log(i)
}
console.log('let:i =', i)//apresentaria erro ao tentar imprimir o valor, pois o valor só existe dentro do bloco de repetição For();