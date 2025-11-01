<?php
// Array base de produtos
$produtos = [
    ["codigo" => 101, "nome" => "Teclado Mecânico", "preco" => 250.90, "estoque" => 10],
    ["codigo" => 102, "nome" => "Mouse Gamer", "preco" => 180.50, "estoque" => 8],
    ["codigo" => 103, "nome" => "Monitor 24\"", "preco" => 999.99, "estoque" => 5],
    ["codigo" => 104, "nome" => "Headset", "preco" => 320.00, "estoque" => 7],
    ["codigo" => 105, "nome" => "Webcam Full HD", "preco" => 210.75, "estoque" => 4],
];

// Captura o filtro via GET (ou string vazia se não houver)
$filtro = $_GET['filtro'] ?? "";

// Filtragem dos produtos
if ($filtro !== "") {
    // stripos() faz a busca sem diferenciar maiúsculas/minúsculas
    $filtrados = [];
    foreach ($produtos as $produto) {
        if (stripos($produto["nome"], $filtro) !== false) {
            $filtrados[] = $produto; // adiciona ao array de filtrados
        }
    }
} else {
    $filtrados = $produtos; // se não houver filtro, mostra todos
}

// Cálculos dinâmicos
$quantidade = count($filtrados);
$estoqueTotal = 0;
$somaPrecos = 0;

foreach ($filtrados as $p) {
    $estoqueTotal += $p['estoque'];
    $somaPrecos += $p['preco'];
}

$precoMedio = $quantidade > 0 ? $somaPrecos / $quantidade : 0;
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Relatório de Produtos com Filtro</title>
    <style>
        table {
            border-collapse: collapse;
            width: 60%;
            margin-top: 10px;
        }
        th, td {
            border: 1px solid #999;
            padding: 6px 10px;
        }
        th {
            background-color: #eee;
        }
        form {
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <h1>Relatório de Produtos</h1>

    <!-- Formulário de filtro -->
    <form method="get" action="">
        <label for="filtro">Nome do produto:</label>
        <input type="text" name="filtro" id="filtro" value="<?= htmlspecialchars($filtro) ?>">
        <button type="submit">Filtrar</button>
    </form>

    <?php if (empty($filtrados)): ?>
        <p>Nenhum produto encontrado</p>
    <?php else: ?>
        <table>
            <tr>
                <th>Código</th>
                <th>Nome do Produto</th>
                <th>Estoque</th>
                <th>Preço</th>
            </tr>

            <?php foreach ($filtrados as $produto): ?>
                <tr>
                    <td><?= $produto['codigo'] ?></td>
                    <td><?= $produto['nome'] ?></td>
                    <td><?= $produto['estoque'] ?></td>
                    <td>R$ <?= number_format($produto['preco'], 2, ',', '.') ?></td>
                </tr>
            <?php endforeach; ?>
        </table>

        <div>
            <p>Quantidade de produtos: <?= $quantidade ?></p>
            <p>Estoque total: <?= $estoqueTotal ?></p>
            <p>Preço médio: R$ <?= number_format($precoMedio, 2, ',', '.') ?></p>
        </div>
    <?php endif; ?>
</body>
</html>
