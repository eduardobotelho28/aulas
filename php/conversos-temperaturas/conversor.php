<?php
// Obtém os dados enviados pelo formulário
$temperatura = filter_input(INPUT_GET, 'temperatura', FILTER_VALIDATE_FLOAT);
$escala = $_GET['escala'] ?? '';

// Validação dos dados
if ($temperatura === null || $temperatura === false || empty($escala)) {
    // Redireciona para o formulário com erro e valores antigos
    $query = http_build_query([
        'erro' => 1,
        'temperatura' => $_GET['temperatura'] ?? '',
        'escala' => $escala
    ]);
    header("Location: form.php?$query");
    exit();
}

// Conversão da temperatura
if ($escala === 'C') {
    $convertida = ($temperatura * 9 / 5) + 32; // Celsius → Fahrenheit
    $originalLabel = "Celsius";
    $convertidaLabel = "Fahrenheit";
} else {
    $convertida = ($temperatura - 32) * 5 / 9; // Fahrenheit → Celsius
    $originalLabel = "Fahrenheit";
    $convertidaLabel = "Celsius";
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Conversor de Temperaturas</title>
</head>
<body>
    <h1>Conversor de Temperaturas</h1>

    <p>Temperatura Original: <?= number_format($temperatura, 1, ',', '.') ?>˚ <?= $originalLabel ?></p>
    <p>Temperatura Convertida: <?= number_format($convertida, 1, ',', '.') ?>˚ <?= $convertidaLabel ?></p>

    <!-- Link para voltar, mantendo os valores -->
    <a href="form.php?temperatura=<?= htmlspecialchars($_GET['temperatura']) ?>&escala=<?= htmlspecialchars($escala) ?>">Voltar</a>
</body>
</html>
