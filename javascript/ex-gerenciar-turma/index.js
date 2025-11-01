// Função toast para exibir mensagens de feedback ao usuário.
// Já está implementada e pode ser utilizada em qualquer parte do código.
// Exemplo de uso:
// showToast({ message: 'Operação realizada com sucesso!', type: 'success' });
function showToast(options = {}) {
    const {
        message = '',
        type = 'info',
        duration = 3000
    } = options;

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    // Add to document
    document.body.appendChild(toast);

    toast.classList.add('toast-visible');

    // Set timeout to remove toast
    setTimeout(() => {
        // Remove the visible class to trigger exit animation
        toast.classList.remove('toast-visible');

        // Remove from DOM after animation completes
        if (document.body.contains(toast)) {
            document.body.removeChild(toast);
        }
    }, duration);

    // Return toast element
    return toast;
}

// Array para armazenar as turmas
const classes = [];
// Exemplo de estrutura de um array com 2 turmas, e 3 alunos cada:
// OBS: As turmas e alunos são adicionados/removidos usando a interface, não são fixas no código.
// const classes = [
//     { name: 'Turma A', students: [
//         { name: 'Aluno 1', balance: 1000 }, { name: 'Aluno 2', balance: 1000 }
//     ] },
//     { name: 'Turma B', students: [
//         { name: 'Aluno 1', balance: 1000 }, { name: 'Aluno 2', balance: 1000 }
//     ] }
// ];

// Função para renderizar a lista de turmas no DOM
// Cada vez que uma alteração for feita na lista de turmas, essa função deve ser chamada
function renderClassList() {
   
    const classesList     = document.querySelector('#classes-list')
    classesList.innerHTML = ''

    if(classes.length === 0) {
        const msg       = document.createElement('p')
        msg.textContent = 'Nenhuma turma cadastrada'
        msg.className   = 'student-list-empty'

        classesList.appendChild(msg)

        return
    }

    classes.forEach ( (classe, index) => {

        //cria o card
        const card = document.createElement('div')
        card.className = 'card'

        //cria o header
        const header = document.createElement('div')
        header.className = 'class-header'

        header.innerHTML = `<div class="class-name-container">
                                <h4 class="class-name-display">${classe.name}</h4> 
                            </div>
                            <p><strong>${classe.students.length}</strong> alunos</p>
                          `

        //cria os botões  
        const actions     = document.createElement('div')
        actions.className = 'class-actions'

        const addBtn       = document.createElement('button')
        addBtn.className   = 'add-student-button'
        addBtn.textContent = 'Adicionar Aluno'

        addBtn.addEventListener('click', () => {

            const newStudent = {
                name   : `Aluno ${classe.students.length + 1}` ,
                balance: 1000                                  ,
            }

            classe.students.push(newStudent)

            showToast({ message: `Aluno adicionado com sucesso!`, type: "success" });
            renderClassList();

        })

        const deleteBtn       = document.createElement('button')
        deleteBtn.className   = 'delete-button'
        deleteBtn.textContent = 'Excluir Turma'

        deleteBtn.addEventListener('click', () => {
            deleteClass(index)
        })

        actions.appendChild(addBtn)
        actions.appendChild(deleteBtn)

        //cria a lista de estudantes
        const studentsList     = document.createElement('ul')
        studentsList.className = 'student-list'

        classe.students.forEach( (student, studentIndex) => {
            
            const studentLi     = document.createElement('li')
            studentLi.className = 'student-list-item'

            const info     = document.createElement('div')
            info.className = 'student-info'

            info.innerHTML = `
                <span class="student-name">${student.name}</span>
                <span class="student-balance">${student.balance}</span>
            `

            const studentAction = document.createElement('div')
            studentAction.className = 'student-actions'

            const btnRemove       = document.createElement('button')
            btnRemove.className   = 'balance-action-button remove-student'
            btnRemove.textContent = 'x'

            btnRemove.addEventListener('click', () => {
                classe.students.splice(studentIndex, 1)
                showToast({
                    message: "aluno excluido com sucesso!",
                    type : 'success'
                })

                renderClassList()
            })


            studentAction.appendChild(btnRemove)
            
            studentLi.appendChild(info)
            studentLi.appendChild(studentAction)
            studentsList.appendChild(studentLi)


        });
        
        
        card.appendChild(header)
        card.appendChild(actions)
        card.appendChild(studentsList)
        classesList.appendChild(card)

    })



    // - Limpa o conteúdo do elemento com id `class-list`
    // - Se não houver turmas, exibe uma mensagem informando que não há turmas cadastradas
    // - Para cada turma no array `classes`, cria um card no HTML com a seguinte estrutura:
        // <div class="class-header">
        //     <div class="class-name-container">
        //         <h4 class="class-name-display">Turma Teste</h4> <!-- Substitua Turma Teste pelo nome da turma -->
        //     </div>
        //     <p><strong>X</strong> alunos</p> <!-- Substitua X pelo número de alunos -->
        // </div>
        // <div class="class-actions">
        //     <button class="add-student-button">Adicionar Aluno</button>
        //     <button class="delete-button">Excluir Turma</button>
        // </div>
        // <ul class="student-list"></ul>
    // - Quando clicar em "Excluir Turma", chama a função deleteClass() passando o índice da turma


    // - Quando clicar em "Adicionar Aluno":
    //   - Insere um objeto de aluno no array `students` da turma correspondente. O objeto deve ter a seguinte estrutura:
    //     {
    //       name: 'Nome do Aluno',
    //       balance: 1000
    //     }
    //   - O saldo é 1000 por padrão, e o nome do aluno deve ser um nome genérico provisório, como "Aluno 1", "Aluno 2", etc.
    //   - Mostra um toast de sucesso informando que o aluno foi adicionado.
    //   - Chame a função renderClassList() para atualizar a lista de turmas no DOM

    // - Para cada aluno adicionado, deve ser criado um item na lista de alunos `student-list` dentro do card da turma, com a seguinte estrutura:
    // <div class="student-info">
    //     <span class="student-name">Aluno 1</span>
    //     <span class="student-balance">R$ 1000.00</span>
    // </div>
    // <div class="student-actions">
    //     <button class="balance-action-button remove-student" title="Remover Aluno">x</button>
    // </div>

    // - Cada aluno deve um botão de ação "Remover Aluno".
    // - Mostre um toast de sucesso informando que o aluno foi removido quando o botão for clicado.
    // - Atualize a lista de turmas no DOM chamando renderClassList() após cada ação de adicionar ou remover aluno.
}

// Função para remover uma turma
function deleteClass(classIndex) {
    classes.splice(classIndex, 1)
    renderClassList()
    showToast({
        message: 'Turma Removida com Sucesso',
        type   : 'success'
    })
}

// Função para criar uma nova turma
function createClass() {

    const input     = document.querySelector('#class-name')
    const className = input.value
    
    if(className.length === 0) {
        showToast({
            message: 'Informe o nome da turma!', 
            type:'error'
        })
        return
    }

    classes.push({ 
        name     : className ,
        students : []        ,
    })

    input.value = ''
    showToast({ message: 'Turma criada com sucesso!', type: 'success' })
    renderClassList()
}

const btnCreateClass = document.querySelector('#create-class-btn')
btnCreateClass.addEventListener('click', createClass)

// Chama renderClassList para inicializar a lista de turmas quando a página é carregada
renderClassList();