<?php
// Inicia ou retoma a sessão
session_start();

// Inicializa o array de produtos se ainda não existir
if (!isset($_SESSION['produtos'])) {
    $_SESSION['produtos'] = [
        "refrigerante",
        "chocolate",
        "leite condensado"
    ];
}

// Se o método for POST, adiciona o novo produto à lista
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $produto = trim($_POST["produto"]); // remove espaços extras
    if (!empty($produto)) { // garante que não adicione vazio
        $_SESSION["produtos"][] = $produto;
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Compras</title>
</head>
<body>
    <h1>Lista de Compras</h1>

    <!-- Formulário para adicionar produtos -->
    <form action="compras.php" method="post">
        <label for="produto">Produto:</label>
        <input type="text" id="produto" name="produto" required>
        <button type="submit">Adicionar</button>
    </form>

    <!-- Lista de produtos -->
    <ul>
        <?php 
        // Percorre o array de produtos e gera os <li>
        foreach ($_SESSION["produtos"] as $item): ?>
            <li><?= htmlspecialchars($item) ?></li>
        <?php endforeach; ?>
    </ul>
</body>
</html>
