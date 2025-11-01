<?php
require_once __DIR__ . "/conexao.php";

// Cria a tabela
$conn->exec("DROP TABLE IF EXISTS produtos");
$conn->exec("CREATE TABLE produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL NOT NULL
)");
echo "Tabela 'produtos' criada com sucesso!\n";

// Insere alguns produtos de exemplo
$produtos = [
    ['nome' => 'Notebook', 'preco' => 3500.00],
    ['nome' => 'Mouse', 'preco' => 120.00],
    ['nome' => 'Teclado', 'preco' => 200.00],
];

$sql = "INSERT INTO produtos (nome, preco) VALUES (:nome, :preco)";
$stmt = $conn->prepare($sql);

foreach ($produtos as $p) {
    $stmt->execute($p);
}

echo "Produtos inseridos com sucesso!\n";
