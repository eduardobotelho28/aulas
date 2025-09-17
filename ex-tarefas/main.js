
// # Prova PW1 - Sistema de Gerenciamento de Tarefas

// Nesta prova, você deve implementar um sistema simples de gerenciamento de tarefas utilizando JavaScript. 
// O sistema permitirá a adição, exclusão e conclusão de tarefas, além do cálculo de quantas já foram concluídas.


const tasks = []

// ---
// ## Questão 01 - Exibição da Lista de Tarefas
// - Crie a função `renderTaskList()` que atualiza a interface com a lista de tarefas.
// - Caso o array `tasks` esteja vazio, exiba a mensagem:
//   <div class="empty-state">Nenhuma tarefa cadastrada...</div>
// - Para cada tarefa, exiba um card com:
//   - Nome da tarefa (`task.name`)
//   - Status da tarefa (pendente ou concluída, visualmente destacado) (task.done)
//   - Botão "Concluir"
//   - Botão "Excluir"

// Função que renderiza a lista na tela
function renderTaskList() {
  
  const list = document.querySelector(".tasks-list")
  list.innerHTML = "";

  if (tasks.length === 0) {
    list.innerHTML = `<div class="empty-state">Nenhuma tarefa cadastrada...</div>`;
    return;
  }

  tasks.forEach( (element, index) => {

    console.log(element)
    
    const card = document.createElement("div");
    card.classList.add("task-card");

    const span = document.createElement("span");
    span.classList.add("task-name");
    span.textContent = element.name;
    if (element.done == true) {
      span.classList.add("done");
    }

    //DELEÇÃO
    const deleteButton = document.createElement("button");
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTaskList();
    })
    deleteButton.textContent = "Deletar";

    //CONCLUIR
    const concButton = document.createElement("button");
    concButton.addEventListener('click', () => {
      const tarefaAtual = tasks[index]
      tarefaAtual.done = true
      renderTaskList();
    })

    concButton.textContent = "concluido";
    card.appendChild(span);
    card.appendChild(deleteButton);
    card.appendChild(concButton);
    list.appendChild(card);

  });
}

// Eventos principais
const BotaoAdicionar = document.querySelector("#btnAdd")
BotaoAdicionar.addEventListener('click', addTask)

const input = document.querySelector("#taskName")

function addTask () {
  const novoObj = {
    name: input.value,
    done:false
  }

  tasks.push(novoObj)

  input.value = ""

  renderTaskList()
}

renderTaskList()


// ---
// ## Questão 05 - Contar Tarefas Concluídas
// - Ao clicar no botão `Calcular Total Concluídas`, percorra o array `tasks` e conte quantas têm `done: true`.
// - Exiba o resultado em `#countDisplay`.
// - Caso não haja tarefas cadastradas, mostre em `.errorMessage`: "Não é possível calcular sem tarefas."
// */
const calcBtn = document.querySelector("#btnCount");
const result = document.querySelector("#countDisplay");
const error = document.querySelector(".errorMessage");

calcBtn.addEventListener('click', () => {

  let cont = 0
  if (tasks.length === 0) {
    error.innerHTML = `<div class="empty-state">Nenhuma tarefa cadastrada...</div>`;
    return;
  }

  tasks.forEach(element => {

    

    if(element.done == true) {
      cont++
    }
  
  });


  result.textContent = cont

})

