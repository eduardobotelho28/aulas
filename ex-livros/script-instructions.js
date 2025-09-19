// Temos uma lista inicial de livros
const books = [
  { title: "Dom Casmurro", author: "Machado de Assis" },
  { title: "Memórias Póstumas de Brás Cubas", author: "Machado de Assis" },
  { title: "O Primo Basílio", author: "Eça de Queirós" },
  { title: "O Guarani", author: "José de Alencar" },
  { title: "Iracema", author: "José de Alencar" },
];

const bookList = document.getElementById("bookList");
const info = document.getElementById("info");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const showAllBtn = document.getElementById("showAllBtn");
const countBtn = document.getElementById("countBtn");

//pegar a lista de livros.
//pegar a div info
//pegar o input de busca
//pegar o botao de busca
//pegar o botao de mostrar todos
//pegar o botao de contar todos.


// 🚩 TAREFAS DO EXERCÍCIO:

// 1. Mostrar todos os livros ao carregar a página
//    - Usar forEach para percorrer o array e criar <li> para cada livro.

// 2. Implementar a busca:
//    - Quando o botão "Buscar" for clicado, mostrar apenas os livros
//      cujo título contenha o texto digitado.
//    - Use loops (forEach ou for) e manipulação de DOM.
//    - Se não encontrar nenhum, mostrar mensagem em #info.

// 3. Implementar "Mostrar todos":
//    - Deve resetar a lista para mostrar todos os livros de novo.

// 4. Implementar "Contar Livros":
//    - Deve exibir em #info quantos livros estão sendo exibidos no momento.
