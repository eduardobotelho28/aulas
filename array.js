// 🏋️ Exercícios de Arrays

// 1️ Contar elementos maiores que 10
// Crie uma função que receba um array de números e retorne quantos números são maiores que 10.

// const array = [10,20,30,40,1,2,3];


// const outroArray = [1,2,3,4,5,6,7]

// function contanum (array){
//   let contador = 0
//   for (let index = 0; index < array.length; index++) {
    
//     let numeroAtual = array[index]

//     if(numeroAtual > 10){
//       contador = contador + 1;
//     }
    
//   }
//   return contador;
// }

// console.log(contanum(outroArray))


// 2️ Verificar elementos repetidos
// Crie uma função que receba um array de strings e diga se existe algum elemento repetido.

// const strings = ['Ana', 'Bia', 'João', 'Ana'];


// function verificaStringRepetida (arrayStrings) {

//   const aux = {}

//   for (let index = 0; index < array.length; index++) {

//     let repetiu = false
    
//     let pessoaAtual = array[index]
//     //Ana

//       if (aux[pessoaAtual]) {
//         repetiu = true 
//       }

//       aux[pessoaAtual] = true;
//   }

//   return repetiu

// }


// function temRepetido(arr) {
//   const vistos = {};

//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     if (vistos[item]) {
//       return true; // já apareceu antes
//     }
//     vistos[item] = true;
//   }

//   return false;
// }

// 3 Somar valores de um array de objetos
// Dado um array de produtos, calcule o preço total.

const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 120 },
  { nome: "Boné", preco: 30 }
];



// 4 Contar quantas vezes cada fruta aparece

// Dado um array de frutas, monte um objeto onde a chave é o nome da fruta e o valor é a quantidade de vezes que ela aparece.

// Exemplo de entrada:
const frutas = ["maçã", "banana", "laranja", "maçã", "banana", "maçã"];

result = {
  maçã: 3,
  banana: 2,
  laranja: 1
}




// 5 Encontrar o aluno com a maior nota

// Dado um array de objetos representando alunos (com nome e nota), encontre o aluno com a maior nota e retorne seu nome.

// Exemplo de entrada:

const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 9.5 },
  { nome: "Maria", nota: 7 }
];


// Resultado esperado:

// Carlos