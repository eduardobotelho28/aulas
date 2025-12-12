// ==============================
// LISTA DE GOLPES
// ==============================
const moves = [
    { name: "Hadouken", sequence: ["↓", "→", "A"] },
    { name: "Shoryuken", sequence: ["→", "↓", "→", "B"] },
    { name: "Sonic Boom", sequence: ["←", "→", "A"] },
    { name: "Flash Kick", sequence: ["↓", "↑", "B"] },
    { name: "Spinning Kick", sequence: ["←", "→", "←", "A"] }
];

// Array da sequência atual
let currentSequence = [];

// Seleção do DOM
const buttons = document.querySelectorAll(".cmd-btn");
const sequenceDisplay = document.getElementById("sequenceDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const clearBtn = document.getElementById("clearBtn");

// ==============================
// QUESTÃO 1 — Evento nos botões
// ==============================
buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {

        // Evitar que o botão de limpar entre aqui
        if (btn.id === "clearBtn") return;

        // adicionar o comando atual
        currentSequence.push(btn.textContent);

        updateSequenceDisplay();
        checkMove();
    });
});

// Mostrar sequência atual
function updateSequenceDisplay() {
    if (currentSequence.length === 0) {
        sequenceDisplay.textContent = "Nenhum comando ainda.";
        return;
    }

    sequenceDisplay.textContent = currentSequence.join(" - ");
}

// ==============================
// QUESTÃO 2 — Limpar
// ==============================
clearBtn.addEventListener("click", function() {
    currentSequence = [];
    updateSequenceDisplay();
    resultDisplay.textContent = "Nenhum golpe detectado.";
});

// ==============================
// QUESTÃO 3 — Detectar golpes
// ==============================
function checkMove() {

    let found = null;

    moves.forEach(function(move) {

        if (move.sequence.length !== currentSequence.length) return;

        let isEqual = true;

        for (let i = 0; i < move.sequence.length; i++) {
            if (move.sequence[i] !== currentSequence[i]) {
                isEqual = false;
                break;
            }
        }

        if (isEqual) {
            found = move.name;
        }
    });

    if (found) {
        resultDisplay.textContent = "Golpe detectado: " + found + "!";
        
        // QUESTÃO 4 — Reset automático
        currentSequence = [];
        updateSequenceDisplay();

    } else {
        resultDisplay.textContent = "Nenhum golpe detectado.";
    }
}
