/* 
# Prova PW1 - Sistema de Gerenciamento de Tarefas

Nesta prova, você deve implementar um sistema simples de gerenciamento de tarefas utilizando JavaScript. 
O sistema permitirá a adição, exclusão e conclusão de tarefas, além do cálculo de quantas já foram concluídas.

---
## Questão 01 - Exibição da Lista de Tarefas
- Crie a função `renderTaskList()` que atualiza a interface com a lista de tarefas.
- Caso o array `tasks` esteja vazio, exiba a mensagem:
  <div class="empty-state">Nenhuma tarefa cadastrada...</div>
- Para cada tarefa, exiba um card com:
  - Nome da tarefa (`task.name`)
  - Status da tarefa (pendente ou concluída, visualmente destacado) (task.done)
  - Botão "Concluir"
  - Botão "Excluir"

---
## Questão 02 - Cadastro de Tarefas
- Ao clicar no botão `Adicionar Tarefa`, capture o valor do input `taskName`.
- Valide se foi informado um nome. Caso contrário, exiba em `.errorMessage`: "Informe o nome da tarefa."
- Adicione um objeto no array `tasks` com as propriedades:
  - `name`: nome da tarefa
  - `done`: false
- Limpe o campo após adicionar.
- Atualize a lista chamando `renderTaskList()`.

---
## Questão 03 - Concluir Tarefas
- No botão "Concluir", altere a propriedade `done` da tarefa correspondente para `true`.
- Atualize a interface para mostrar a tarefa riscada (classe CSS `done`).

---
## Questão 04 - Excluir Tarefas
- No botão "Excluir", remova a tarefa correspondente do array `tasks`.
- Atualize a interface chamando `renderTaskList()`.

---
## Questão 05 - Contar Tarefas Concluídas
- Ao clicar no botão `Calcular Total Concluídas`, percorra o array `tasks` e conte quantas têm `done: true`.
- Exiba o resultado em `#countDisplay`.
- Caso não haja tarefas cadastradas, mostre em `.errorMessage`: "Não é possível calcular sem tarefas."
*/
