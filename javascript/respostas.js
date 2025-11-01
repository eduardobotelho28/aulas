// const numeros = [5, 12, 8, 21, 3, 15];

// function contarMaioresQueDez(arr) {
//   return arr.filter(num => num > 10).length;
// }

// console.log(contarMaioresQueDez(numeros)); // 3




// const nomes = ["Ana", "Carlos", "Ana", "Maria"];

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

// console.log(temRepetido(nomes)); // true





const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 120 },
  { nome: "Boné", preco: 30 }
];

function calcularTotal(arr) {
  let soma = 0;

  for (let i = 0; i < arr.length; i++) {
    soma += arr[i].preco;
  }

  return soma;
}

console.log(calcularTotal(produtos)); // 200




const frutas = ["maçã", "banana", "laranja", "maçã", "banana", "maçã"];

// Objeto auxiliar para armazenar as contagens
const contagem = {};

// Loop pelo array de frutas
for (let fruta of frutas) {
  // Se já existe a fruta no objeto, soma +1
  if (contagem[fruta]) {
    contagem[fruta]++;
  } else {
    // Se não existe ainda, inicia com 1
    contagem[fruta] = 1;
  }
}

console.log(contagem);
// Resultado: { maçã: 3, banana: 2, laranja: 1 }



const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 9.5 },
  { nome: "Maria", nota: 7 }
];

// Variável para armazenar o melhor aluno
let melhorAluno = alunos[0]; // começa assumindo o primeiro

// Percorre o array de alunos
for (let aluno of alunos) {
  if (aluno.nota > melhorAluno.nota) {
    melhorAluno = aluno; // atualiza se encontrar nota maior
  }
}

console.log("O aluno com a maior nota é:", melhorAluno.nome);
// Resultado: "O aluno com a maior nota é: Carlos"