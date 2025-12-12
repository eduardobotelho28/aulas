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

*/

let teams = []

const saved = localStorage.getItem("teams");
if (saved) {
  teams = JSON.parse(saved);
  renderList();
}

function save () {
  localStorage.setItem("teams", JSON.stringify(teams))
}

/*








------------------------------------
QUESTÃO 2 — Cadastrar time
------------------------------------
Quando o usuário clicar em #addTeamBtn:
1. Pegue o nome e títulos do formulário.
2. Valide os dados (nome não pode ser vazio).
3. Crie um objeto time.
4. Adicione no array "teams".
5. Atualize a lista no DOM chamando uma função sua "renderList()".


*/

const addTeamBtn = document.querySelector('#addTeamBtn')

addTeamBtn.addEventListener('click', function () {

  const name = document.querySelector('#teamName').value.trim()
  const titles = Number(document.querySelector('#teamTitles').value.trim())

  if(name.length === 0) {
    alert('Coloque um nome do time!')
    return
  }

  const newTeam = {
    name: name       ,
    titles : titles  ,
    id: Date.now()   , 
  }

  teams.push(newTeam)

  
  document.getElementById("teamName").value = "";
  document.getElementById("teamTitles").value = "";

  save()
  renderList()

})

/*


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

*/

function renderList (customList) {

  const list = document.querySelector('#teamList')
  list.innerHTML = ""

  let teamsToRender = null

  if(customList) {
    teamsToRender = customList
  }

  else {
    teamsToRender = teams
  }

  teamsToRender.forEach (team => {

    const li = document.createElement('li')
    li.textContent = `${team.name} (${team.titles})`

    const btnDelete = document.createElement('button')
    btnDelete.textContent = "Excluir"
    btnDelete.classList.add("action-btn");
    btnDelete.onclick = () => deleteTeam(team.id);

    const btnDetails = document.createElement('button')
    btnDetails.textContent = "Detalhes"
    btnDetails.classList.add("action-btn");
    btnDetails.onclick = () => showDetails(team.id);

    li.appendChild(btnDetails)
    li.appendChild(btnDelete)
    
    list.appendChild(li)

  })

}

/*






------------------------------------
QUESTÃO 4 — Exibir detalhes
------------------------------------
Crie a função showDetails(id)
- Achar o time pelo id
- Mostrar no elemento #teamDetails:
  -> Nome
  -> Títulos
  -> Uma frase tipo: "O time X possui Y títulos nacionais."

*/

function showDetails (id) {

  let found = false

  teams.forEach(team => {
      if(team.id == id) {
        found = team
      }
  })

  if(found) {

    document.getElementById("teamDetails").innerHTML = 
        `<h3>${found.name}</h3>
         <p>Títulos nacionais: <strong>${found.titles}</strong></p>
         <p>O time <strong>${found.name}</strong> possui <strong>${found.titles}</strong> títulos nacionais.</p>`;

  }

}

/*




------------------------------------
QUESTÃO 5 — deletar o time
------------------------------------
Crie a função deleteTeam, recebe o id
deleta o time a renderiza  novamente a lista

*/

function deleteTeam ( id ) {

  let newList = []

  teams.forEach (team => {

    if(team.id != id) {
      newList.push(team)
    }

  })

  teams = newList

  renderList()
  save()

}


/*




------------------------------------
QUESTÃO 6 — Buscar time
------------------------------------
Quando clicar em #searchBtn:
- Pegue o valor de #searchInput
- Mostre APENAS os times cujo nome contenha o texto digitado
- Utilize foreach
- Atualize a lista temporariamente (SEM mexer no array original)

*/

const searchBtn = document.querySelector('#searchBtn')

searchBtn.addEventListener('click', () => {

  const text = document.querySelector('#searchInput').value.trim().toLowerCase()  

  const newList = []

  teams.forEach( team => {

    if(team.name.toLowerCase().includes(text)) {
      newList.push(team)
    }
    
  } )

  // teams = newList

  renderList (newList)


})

/*




------------------------------------
QUESTÃO EXTRA — Persistência
------------------------------------
Ao iniciar a página:
- Se existir dados no localStorage, carregue para dentro do array e renderize a lista automaticamente.

------------------------------------

*/
