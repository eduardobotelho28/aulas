<?php
require_once __DIR__ . '/conexao.php';

// Busca todos os carros
try {
    $stmt = $conn->query("SELECT modelo, ano, preco FROM carros ORDER BY modelo");
    $carros = $stmt->fetchAll();
} catch (PDOException $e) {
    // Em caso de erro na query, trata e define array vazio para não quebrar a página
    $carros = [];
    $erroQuery = "Erro ao buscar carros: " . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Catálogo de Carros</title>
    <style>
        table { border-collapse: collapse; width: 70%; margin-top: 12px; }
        th, td { border: 1px solid #aaa; padding: 8px 10px; text-align: left; }
        th { background:#f0f0f0; }
    </style>
</head>
<body>
    <h1>Catálogo de Carros</h1>

    <?php if (!empty($erroQuery)): ?>
        <p style="color: red;"><?= htmlspecialchars($erroQuery) ?></p>
    <?php endif; ?>

    <?php if (empty($carros)): ?>
        <p>Nenhum carro encontrado</p>
    <?php else: ?>
        <table>
            <tr>
                <th>Modelo</th>
                <th>Ano</th>
                <th>Preço</th>
            </tr>

            <?php foreach ($carros as $carro): ?>
                <tr>
                    <td><?= htmlspecialchars($carro['modelo']) ?></td>
                    <td><?= htmlspecialchars($carro['ano']) ?></td>
                    <td>R$ <?= number_format($carro['preco'], 2, ',', '.') ?></td>
                </tr>
            <?php endforeach; ?>
        </table>
    <?php endif; ?>
</body>
</html>
