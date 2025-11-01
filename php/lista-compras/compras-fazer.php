<?php
// TODO: iniciar ou retomar a sessão com session_start()

// TODO: inicializar o array $_SESSION["produtos"] com alguns exemplos
//       apenas se ele ainda não existir

// TODO: se o método da requisição for POST, adicionar o produto
//       recebido do formulário ao array de produtos
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

    <form action="compras.php" method="post">
        <label for="produto">Produto:</label>
        <input type="text" id="produto" name="produto" required>
        <button type="submit">Adicionar</button>
    </form>

    <ul>
        <!-- TODO: percorrer o array de produtos da sessão e gerar <li> para cada um -->
    </ul>
</body>
</html>
