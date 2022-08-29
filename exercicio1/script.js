/*Exercicio 1*/

let nome 
let idade

console.log(typeof nome)
console.log(typeof idade)
/* O resultado na tela dá indefinido pois não foi atribuido valor as variaveis*/

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

/* Ambas as variaveis mudaram seu tipo de "undefined" pra "string"*/

console.log("Olá", nome, "você tem", idade, "de idade!")
