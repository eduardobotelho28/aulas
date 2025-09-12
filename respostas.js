const numeros = [5, 12, 8, 21, 3, 15];

function contarMaioresQueDez(arr) {
  return arr.filter(num => num > 10).length;
}

console.log(contarMaioresQueDez(numeros)); // 3




const nomes = ["Ana", "Carlos", "Ana", "Maria"];

function temRepetido(arr) {
  const vistos = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (vistos[item]) {
      return true; // já apareceu antes
    }
    vistos[item] = true;
  }

  return false;
}

console.log(temRepetido(nomes)); // true





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