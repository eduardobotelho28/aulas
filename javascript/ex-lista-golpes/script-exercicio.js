/* 
=========================================
    EXERCÍCIO JS — GOLPES ESPECIAIS
=========================================

OBJETIVO:
Montar uma sequência de comandos e verificar
se ela corresponde a algum golpe especial.

Você deve resolver todas as questões abaixo 
somente neste arquivo.

=====================
LISTA DE GOLPES
=====================

Você deve criar um array chamado "moves" com objetos:

Cada objeto deve ter:
{
    name: "Hadouken",
    sequence: ["↓", "→", "A"]
}

Crie pelo menos 5 golpes, cada um com uma sequência diferente.

=====================
QUESTÃO 1 — Eventos
=====================
Selecione TODOS os botões .cmd-btn
e adicione um evento de clique que:

- Adicione o comando clicado a um array chamado "currentSequence"
- Atualize o elemento #sequenceDisplay com o conteúdo do array

=====================
QUESTÃO 2 — Limpar
=====================
No botão #clearBtn, ao clicar:

- Esvaziar o array currentSequence
- Atualizar o #sequenceDisplay com o texto:
  "Nenhum comando ainda."

=====================
QUESTÃO 3 — Detectar Golpe
=====================
Sempre que o usuário clicar em algum botão .cmd-btn,
verifique se currentSequence corresponde a algum golpe.

Para isso:
- Compare currentSequence com moves[i].sequence
- Se forem IGUAIS (mesma ordem e mesmo tamanho):
     => Mostre o nome do golpe em #resultDisplay
- Se não combinar com nada:
     => Escrever "Nenhum golpe detectado."

Dica:
Use loops for ou foreach, não use JSON/stringify.

=====================
QUESTÃO 4 — Reset automático (extra)
=====================
Se um golpe for detectado, automaticamente limpar a sequência
e atualizar #sequenceDisplay.

==========================================

Boa sorte mestre! :)
*/
