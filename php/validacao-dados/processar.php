<?php
// Verifica se o método é POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: formulario.php");
    exit;
}

$erros = [];

// Coleta e sanitiza os dados
$nome = trim($_POST["nome"] ?? "");
$ingresso = trim($_POST["ingresso"] ?? "");
$curso = $_POST["curso"] ?? "";
$turno = $_POST["turno"] ?? "";
$matriculado = $_POST["matriculado"] ?? "não";

// Validações
if ($nome === "") {
    $erros[] = "O nome do aluno deve ser informado.";
} elseif (strlen($nome) < 3) {
    $erros[] = "O nome do aluno deve ter pelo menos 3 letras.";
}

if ($ingresso === "") {
    $erros[] = "O ano de ingresso deve ser informado.";
} elseif (!is_numeric($ingresso)) {
    $erros[] = "O ano de ingresso deve ser numérico.";
} elseif ($ingresso < 2006 || $ingresso > 2025) {
    $erros[] = "Ano de ingresso deve ser entre 2006 e 2025.";
}

if ($curso === "") {
    $erros[] = "O curso do aluno deve ser selecionado.";
}

if ($turno === "") {
    $erros[] = "O turno deve ser informado.";
}

// Mapeia o nome do curso
switch ($curso) {
    case "inf": $nomeCurso = "Técnico em Informática"; break;
    case "mct": $nomeCurso = "Técnico em Mecatrônica"; break;
    case "pfm": $nomeCurso = "Técnico em Fabricação Mecânica"; break;
    case "tsi": $nomeCurso = "Tecnólogo em Sistemas para Internet"; break;
    case "eca": $nomeCurso = "Engenharia de Controle e Automação"; break;
    case "ped": $nomeCurso = "Licenciatura em Pedagogia"; break;
    default: $nomeCurso = "";
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validação dos Dados</title>
</head>
<body>
    <h1>Validação dos Dados</h1>

    <?php if (empty($erros)): ?>
        <div>
            <p>Os dados recebidos são válidos:</p>
            <ul>
                <li>Nome: <?= htmlspecialchars($nome) ?></li>
                <li>Ano de Ingresso: <?= htmlspecialchars($ingresso) ?></li>
                <li>Curso: <?= htmlspecialchars($nomeCurso) ?></li>
                <li>Turno: <?= htmlspecialchars($turno) ?></li>
                <li>Matriculado: <?= htmlspecialchars($matriculado) ?></li>
            </ul>
        </div>
    <?php else: ?>
        <div>
            <p>Os dados recebidos não são válidos:</p>
            <ul>
                <?php foreach ($erros as $erro): ?>
                    <li><?= htmlspecialchars($erro) ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
    <?php endif; ?>

    <p><a href="formulario.php">Voltar ao formulário</a></p>
</body>
</html>
