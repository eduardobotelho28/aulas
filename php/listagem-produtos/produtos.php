<?php
// Array de produtos (cada um é um array associativo)
$produtos = [
    ["codigo" => 101, "nome" => "Teclado Mecânico", "preco" => 250.90, "estoque" => 10],
    ["codigo" => 102, "nome" => "Mouse Gamer", "preco" => 180.50, "estoque" => 8],
    ["codigo" => 103, "nome" => "Monitor 24\"", "preco" => 999.99, "estoque" => 5],
    ["codigo" => 104, "nome" => "Headset", "preco" => 320.00, "estoque" => 7],
    ["codigo" => 105, "nome" => "Webcam Full HD", "preco" => 210.75, "estoque" => 4],
];

// Cálculos dinâmicos
$quantidade   = count($produtos) ; 
$estoqueTotal = 0                ;
$somaPrecos   = 0                ;

// Percorre os produtos para somar estoque e preços
foreach ($produtos as $p) {
    $estoqueTotal += $p['estoque'];
    $somaPrecos += $p['preco'];
}

// Evita divisão por zero no cálculo do preço médio
$precoMedio = $quantidade > 0 ? $somaPrecos / $quantidade : 0;
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Relatório de Produtos</title>
    <style>
        table {
            border-collapse: collapse;
            width: 60%;
            margin-top: 10px;
        }
        th, td {
            border: 1px solid #999;
            padding: 6px 10px;
            text-align: left;
        }
        th {
            background-color: #eee;
        }
    </style>
</head>
<body>
    <h1>Relatório de Produtos</h1>

    <?php if (empty($produtos)): ?>
        <p>Nenhum produto encontrado</p>
    <?php else: ?>
        <table>
            <tr>
                <th>Código</th>
                <th>Nome do Produto</th>
                <th>Estoque</th>
                <th>Preço</th>
            </tr>

            <?php foreach ($produtos as $produto): ?>
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
