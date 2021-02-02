// 1 - Declare uma variavel chamada weight
let weight
// 2 - Que tipo de dado é a variavel acima?
console.log(typeof weight)
/* 3 - Declare uma variavel e atribua valores para cada um dos dados
        name (string)
        age (int)
        stars (float)
        isSubscribe (boolean)
*/
let name = "joao"
let age = 18
let stars = 3.2
let isSubscribe = false

/* 4 - A variavel student abaixo é de qual tipo de dado? 
    4.1 - atribua a ela as mesmas propriedades do exercicio 3
    4.2 - mostre no console a seguinte mensagem
        <name> de idade <age> pesa: <weight>
*/

let student = {};
console.log(typeof(student));

student = {
    name: "joao",
    age: 18,
    stars: 3.2,
    weight: 75,
    isSubscribe: false
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} KG.`)

// 5 - Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.

let students = []

// 6 - Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (não copiar e colar o objeto, mas utilizar  o objeto criado e inserir ele no array.)

students = [student]

// 7 - Coloque no console o valor da posição zero do array a cima

console.log(students[0])

// 8 -  Crie um novo student e coloque na posição 1 do Array students

students.push( {
    name: "vitor",
    age: 19,
    stars: 3.3,
    weight: 76,
    isSubscribe: false  
})

console.log(students)

/* 9 - Sem rodar o código responda qual é a resposta do código abaixo e por que?
    console.log(a)
    var a = 1
*/
//unsigned pois a variavel declarada com var é afetada pelo hoisting
console.log(a)
var a = 1