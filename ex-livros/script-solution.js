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

// Função para renderizar lista
function renderBooks(list) {
  bookList.innerHTML = "";
  list.forEach(book => {
    const li = document.createElement("li");
    li.textContent = `${book.title} - ${book.author}`;
    bookList.appendChild(li);
  });
}

// Mostrar todos no início
renderBooks(books);

// Buscar
searchBtn.addEventListener("click", () => {
  
  const term = searchInput.value.toLowerCase();
  let foundBooks = [];

  books.forEach(book => {
    if (book.title.toLowerCase().includes(term)) {
      foundBooks.push(book);
    }
  });

  if (foundBooks.length > 0) {
    renderBooks(foundBooks);
    info.textContent = "";
  } else {
    bookList.innerHTML = "";
    info.textContent = "Nenhum livro encontrado.";
  }
});

// Mostrar todos
showAllBtn.addEventListener("click", () => {
  renderBooks(books);
  info.textContent = "";
});

// Contar livros
countBtn.addEventListener("click", () => {
  const displayed = bookList.getElementsByTagName("li").length;
  info.textContent = `Total de livros exibidos: ${displayed}`;
});
