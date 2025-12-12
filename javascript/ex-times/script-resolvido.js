// ============================
//      RESOLUÇÃO COMPLETA
// ============================

// Array principal
let teams = [];

// Recuperar do localStorage ao iniciar
const saved = localStorage.getItem("teams");
if (saved) {
    teams = JSON.parse(saved);
    renderList();
}

// Utilidades — salvar sempre que modificar
function save() {
    localStorage.setItem("teams", JSON.stringify(teams));
}

// ------------------------------------
// QUESTÃO 2 — Cadastrar Time
// ------------------------------------
document.getElementById("addTeamBtn").addEventListener("click", function () {

    const name = document.getElementById("teamName").value.trim();
    const titles = Number(document.getElementById("teamTitles").value);

    if (name === "") {
        alert("Digite o nome do time!");
        return;
    }

    // Criar objeto
    const newTeam = {
        id: Date.now(), // ID único simples
        name: name,
        titles: titles
    };

    teams.push(newTeam);   // add no array
    save();                // salvar
    renderList();          // atualizar lista

    // limpar inputs
    document.getElementById("teamName").value = "";
    document.getElementById("teamTitles").value = "";
});

// ------------------------------------
// QUESTÃO 3 — Renderizar Lista
// ------------------------------------
function renderList(customList) {

    const list = document.getElementById("teamList");
    list.innerHTML = "";

    // se customList não veio, renderiza o array todo
    const data = customList || teams;

    data.forEach(function (team) {

        const li = document.createElement("li");
        li.textContent = team.name + " (" + team.titles + " títulos)";

        // Botão detalhes
        const btnDetails = document.createElement("button");
        btnDetails.textContent = "Detalhes";
        btnDetails.classList.add("action-btn");
        btnDetails.onclick = () => showDetails(team.id);

        // Botão excluir
        const btnDelete = document.createElement("button");
        btnDelete.textContent = "Excluir";
        btnDelete.classList.add("action-btn")
        btnDelete.onclick = () => deleteTeam(team.id);

        li.appendChild(btnDetails);
        li.appendChild(btnDelete);

        list.appendChild(li);
    });
}

// ------------------------------------
// QUESTÃO 4 — Exibir detalhes
// ------------------------------------
function showDetails(id) {

    let found = null;

    teams.forEach(function (team) {
        if (team.id === id) {
            found = team;
        }
    });

    if (!found) return;

    document.getElementById("teamDetails").innerHTML =
        `<h3>${found.name}</h3>
         <p>Títulos nacionais: <strong>${found.titles}</strong></p>
         <p>O time <strong>${found.name}</strong> possui <strong>${found.titles}</strong> títulos nacionais.</p>`;
}

// ------------------------------------
// QUESTÃO 5 — Deletar
// ------------------------------------
function deleteTeam (id) {

    const newList = [];

    teams.forEach((t) => {
        if (t.id !== id) {
            newList.push(t);
        }
    });

    teams = newList;

    save();
    renderList();
}

// ------------------------------------
// QUESTÃO 6 — Buscar time
// ------------------------------------
document.getElementById("searchBtn").addEventListener("click", function () {

    const text = document.getElementById("searchInput").value.toLowerCase();

    const tempList = [];

    teams.forEach(function (team) {
        if (team.name.toLowerCase().includes(text)) {
            tempList.push(team);
        }
    });

    renderList(tempList); // renderiza somente filtrados
});

