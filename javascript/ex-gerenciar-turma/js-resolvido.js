// Função toast para exibir mensagens de feedback ao usuário.
function showToast(options = {}) {
    const {
        message = '',
        type = 'info',
        duration = 3000
    } = options;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    document.body.appendChild(toast);
    toast.classList.add('toast-visible');

    setTimeout(() => {
        toast.classList.remove('toast-visible');
        if (document.body.contains(toast)) {
            document.body.removeChild(toast);
        }
    }, duration);

    return toast;
}

// Array de turmas
const classes = [];

// Renderiza lista de turmas
function renderClassList() {
    const classesList = document.getElementById("classes-list");
    classesList.innerHTML = "";

    if (classes.length === 0) {
        const msg = document.createElement("p");
        msg.className = "student-list-empty";
        msg.textContent = "Nenhuma turma cadastrada.";
        classesList.appendChild(msg);
        return;
    }

    classes.forEach((turma, turmaIndex) => {
        const card = document.createElement("div");
        card.className = "card";

        // Header da turma
        const header = document.createElement("div");
        header.className = "class-header";

        const nameContainer = document.createElement("div");
        nameContainer.className = "class-name-container";

        const h4 = document.createElement("h4");
        h4.className = "class-name-display";
        h4.textContent = turma.name;

        nameContainer.appendChild(h4);

        const p = document.createElement("p");
        p.innerHTML = `<strong>${turma.students.length}</strong> alunos`;

        header.appendChild(nameContainer);
        header.appendChild(p);

        // Ações da turma
        const actions = document.createElement("div");
        actions.className = "class-actions";

        const addBtn = document.createElement("button");
        addBtn.className = "add-student-button";
        addBtn.textContent = "Adicionar Aluno";
        addBtn.addEventListener("click", () => {
            const newStudentName = `Aluno ${turma.students.length + 1}`;
            turma.students.push({ name: newStudentName, balance: 1000 });

            showToast({ message: `${newStudentName} adicionado com sucesso!`, type: "success" });
            renderClassList();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-button";
        deleteBtn.textContent = "Excluir Turma";
        deleteBtn.addEventListener("click", () => deleteClass(turmaIndex));

        actions.appendChild(addBtn);
        actions.appendChild(deleteBtn);

        // Lista de alunos
        const ul = document.createElement("ul");
        ul.className = "student-list";

        turma.students.forEach((aluno, alunoIndex) => {
            const li = document.createElement("li");
            li.className = "student-list-item";

            const info = document.createElement("div");
            info.className = "student-info";

            const spanName = document.createElement("span");
            spanName.className = "student-name";
            spanName.textContent = aluno.name;

            const spanBalance = document.createElement("span");
            spanBalance.className = "student-balance";
            spanBalance.textContent = `R$ ${aluno.balance.toFixed(2)}`;

            info.appendChild(spanName);
            info.appendChild(spanBalance);

            const actionsDiv = document.createElement("div");
            actionsDiv.className = "student-actions";

            const removeBtn = document.createElement("button");
            removeBtn.className = "balance-action-button remove-student";
            removeBtn.title = "Remover Aluno";
            removeBtn.textContent = "x";
            removeBtn.addEventListener("click", () => {
                turma.students.splice(alunoIndex, 1);
                showToast({ message: `${aluno.name} removido com sucesso!`, type: "success" });
                renderClassList();
            });

            actionsDiv.appendChild(removeBtn);

            li.appendChild(info);
            li.appendChild(actionsDiv);

            ul.appendChild(li);
        });

        card.appendChild(header);
        card.appendChild(actions);
        card.appendChild(ul);

        classesList.appendChild(card);
    });
}

// Remove turma
function deleteClass(index) {
    classes.splice(index, 1);
    showToast({ message: "Turma removida com sucesso!", type: "success" });
    renderClassList();
}

// Cria turma
function createClass() {
    const input = document.getElementById("class-name");
    const className = input.value.trim();

    if (!className) {
        showToast({ message: "Por favor, informe o nome da turma.", type: "error" });
        return;
    }

    classes.push({ name: className, students: [] });
    input.value = "";

    showToast({ message: "Turma criada com sucesso!", type: "success" });
    renderClassList();
}

// Inicializa
document.getElementById("create-class-btn").addEventListener("click", createClass);
renderClassList();
