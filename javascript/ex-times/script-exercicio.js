/* 
===========================
      EXERCÍCIO JS
 Temática: Times de Futebol
===========================

Você deve resolver todas as questões usando SOMENTE ESTE ARQUIVO.

IMPORTANTE:
- Manipular o DOM
- Trabalhar com eventos
- Usar array de objetos
- Fazer CRUD básico em memória

O sistema já possui no HTML:
- Formulário de cadastro
- Campo de busca
- Lista de times
- Área de detalhes







------------------------------------
QUESTÃO 1 — Criar estrutura base 
------------------------------------
Crie um array chamado "teams".
Inicialize começando vazio.
criar função para salvar o array no localStorage








------------------------------------
QUESTÃO 2 — Cadastrar time
------------------------------------
Quando o usuário clicar em #addTeamBtn:
1. Pegue o nome e títulos do formulário.
2. Valide os dados (nome não pode ser vazio).
3. Crie um objeto time.
4. Adicione no array "teams".
5. Atualize a lista no DOM chamando uma função sua "renderList()".








------------------------------------
QUESTÃO 3 — Renderizar lista
------------------------------------
Crie uma função renderList():
- Deve limpar a lista
- Listar todos os times do array
- Cada item precisa ter:
  - Nome do time
  - Botão "Detalhes"
  - Botão "Excluir"

"Detalhes" deve chamar uma função sua showDetails(id)
"Excluir" deve chamar uma função sua deleteTeam








------------------------------------
QUESTÃO 4 — Exibir detalhes
------------------------------------
Crie a função showDetails(id)
- Achar o time pelo id
- Mostrar no elemento #teamDetails:
  -> Nome
  -> Títulos
  -> Uma frase tipo: "O time X possui Y títulos nacionais."





------------------------------------
QUESTÃO 5 — deletar o time
------------------------------------
Crie a função deleteTeam, recebe o id
deleta o time a renderiza  novamente a lista




------------------------------------
QUESTÃO 6 — Buscar time
------------------------------------
Quando clicar em #searchBtn:
- Pegue o valor de #searchInput
- Mostre APENAS os times cujo nome contenha o texto digitado
- Utilize foreach
- Atualize a lista temporariamente (SEM mexer no array original)





------------------------------------
QUESTÃO EXTRA — Persistência
------------------------------------
Ao iniciar a página:
- Se existir dados no localStorage, carregue para dentro do array e renderize a lista automaticamente.

------------------------------------

*/
