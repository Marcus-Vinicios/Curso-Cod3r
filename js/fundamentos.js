/*Sempre escolher bons nomes para variaveis e funções*/

let pdt = "caneta" // String (texto) -> sequencia de caracteres;
let qtd = 10
let prc = 6.5
let impt = 1.5
let fnl_prc = (prc + impt) * qtd

//o sinal de "+" concatena valores e dados;
console.log("Produto: "+pdt)
console.log("Quantidade: "+qtd)
console.log("Preço: "+prc)
console.log("Imposto: "+impt)
console.log("Preço final: R$"+fnl_prc)

//typeof -> mostra o tipo de uma variavel, EX: var nome = Marcus, console.log(typeof nome) -> String;
console.log("\nA variavel 'pdt("+pdt+")' é uma: " + typeof pdt + '\n')

//Tipos em JavaScript: String;
const escola = "Cod3r"
console.log("Tipos em JavaScript: String")
console.log(escola.charAt(4))//Retorna o caractere do seu devido indice
console.log(escola.charCodeAt(3))//Retorna o valor do caractere dentro da tabela ASCII
console.log(escola.indexOf('3'))//Retorna o indice associado ao seu caractere
console.log(escola.substring(1))//Retorna o valor a partir do indice indicado
console.log(escola.substring(0, 3))//Inicia o valor a partir do indice indicado e termina no indice indicado sem inclui-lo no retorno
console.log('Escola '.concat(escola).concat("!"))//.concat concatena os valores sem a nescessidade de uma variavel
console.log(escola.replace(3, 'e'))//Substitui os valores do indice indicado
console.log('Maça,Uva,Banana,Laranja,Melancia,Robson'.split(','))//.split pega dados e gera uma lista

//Tipos em JavaScript: Numbers;
console.log("\nTipos em JavaScript: Numbers")
const peso1 = 4.0
const peso2 = Number('6.0')
const peso3 = 1.5
console.log(peso1, peso2, peso3)
console.log(Number.isInteger(peso1))//retorna TRUE ou FALSE quando um numero é ou não inteiro
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso3))
const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 * peso2)
console.log(media)
console.log(media.toFixed(2))//limita o numero das casa decimais de uma variavel
console.log(media.toString(2))//tranforma uma variavel para uma string em binario
console.log(typeof media)
console.log(typeof Number)

//Numbers: alguns cuidados;
console.log(7 / 0)
console.log("10" / 2)
console.log("Show!" * 2)
console.log(0.1 + 0.7)
console.log((12.634).toFixed(2))

//função Math;
console.log('\nUsando a função Math')
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log(area)
console.log(typeof Math)

//Tipos em JavaScript: Booleans;
console.log("\nTipos em JavaScript: Booleans")
let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)
isAtivo = 1
console.log(!!isAtivo)