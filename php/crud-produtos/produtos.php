<?php
require_once __DIR__ . "/conexao.php";

// Se o formulário for enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = trim($_POST['nome'] ?? '');
    $preco = trim($_POST['preco'] ?? '');

    // Validação simples
    if ($nome && is_numeric($preco)) {
        // Inserção com PDO preparado
        $stmt = $conn->prepare("INSERT INTO produtos (nome, preco) VALUES (:nome, :preco)");
        $stmt->bindValue(':nome', $nome);  // BLINDA O NOME 
        $stmt->bindValue(':preco', $preco); // BLINDA O PREÇO
        $stmt->execute();
    }
}

// Consulta todos os produtos
$stmt = $conn->query("SELECT * FROM produtos");
$produtos = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Catálogo de Produtos</title>
</head>
<body>
    <h1>Cadastro de Produto</h1>
    <form method="post">
        <label>Nome:</label>
        <input type="text" name="nome" required>
        <label>Preço:</label>
        <input type="number" step="0.01" name="preco" required>
        <button type="submit">Cadastrar</button>
    </form>

    <h2>Lista de Produtos</h2>

    <?php if (empty($produtos)): ?>
        <p>Nenhum produto encontrado.</p>
    <?php else: ?>
        <table border="1" cellpadding="5">
            <tr>
                <th>Nome</th>
                <th>Preço (R$)</th>
            </tr>
            <?php foreach ($produtos as $p): ?>
                <tr>
                    <td><?= htmlspecialchars($p['nome']) ?></td>
                    <td><?= number_format($p['preco'], 2, ',', '.') ?></td>
                </tr>
            <?php endforeach; ?>
        </table>
    <?php endif; ?>
</body>
</html>
