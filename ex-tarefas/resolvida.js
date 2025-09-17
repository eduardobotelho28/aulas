// Array que guarda as tarefas
let tasks = [];

// Função que renderiza a lista na tela
function renderTaskList() {
  const list = document.querySelector(".tasks-list");
  list.innerHTML = "";

  if (tasks.length === 0) {
    list.innerHTML = `Nenhuma tarefa cadastrada...`;
    return;
  }

  tasks.forEach((task, index) => {
    const card = document.createElement("div");
    card.classList.add("task-card");

    const span = document.createElement("span");
    span.classList.add("task-name");
    span.textContent = task.name;
    if (task.done) {
      span.classList.add("done");
    }

    // Botão concluir
    const btnDone = document.createElement("button");
    btnDone.textContent = "Concluir";
    btnDone.addEventListener("click", () => {
      tasks[index].done = true;
      renderTaskList();
    });

    // Botão excluir
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Excluir";
    btnDelete.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTaskList();
    });

    card.appendChild(span);
    card.appendChild(btnDone);
    card.appendChild(btnDelete);

    list.appendChild(card);
  });
}

// Função para adicionar tarefas
function addTask() {
  const input = document.getElementById("taskName");
  const name = input.value.trim();
  const error = document.querySelector(".errorMessage");
  error.textContent = "";

  if (!name) {
    error.textContent = "Informe o nome da tarefa.";
    return;
  }

  tasks.push({ name, done: false });
  input.value = "";
  renderTaskList();
}

// Função para contar tarefas concluídas
function countTasks() {
  const error = document.querySelector(".errorMessage");
  error.textContent = "";
  const display = document.getElementById("countDisplay");

  if (tasks.length === 0) {
    error.textContent = "Não é possível calcular sem tarefas.";
    return;
  }

  const total = tasks.filter(t => t.done).length;
  display.textContent = `Total concluídas: ${total}`;
}

// Eventos principais
document.getElementById("btnAdd").addEventListener("click", addTask);
document.getElementById("btnCount").addEventListener("click", countTasks);

// Render inicial
renderTaskList();
