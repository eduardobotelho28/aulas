<?php
// TODO: Criar o array de produtos (com codigo, nome, preco e estoque)

// TODO: Obter o valor do filtro via $_GET['filtro'] (ou string vazia se não existir)

// TODO: Filtrar os produtos usando stripos() para buscar parte do nome, ignorando maiúsculas/minúsculas
// - Se houver filtro, criar um array $filtrados apenas com produtos correspondentes
// - Se o filtro estiver vazio, $filtrados deve receber todos os produtos

// TODO: Calcular a quantidade, o estoque total e o preço médio dos produtos filtrados
// Dica: use count(), soma com foreach e evite divisão por zero
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Relatório de Produtos com Filtro</title>
    <style>
        /* TODO: estilizar tabela e formulário de forma simples */
    </style>
</head>
<body>
    <h1>Relatório de Produtos</h1>

    <!-- TODO: criar formulário de filtro (método GET) com input e botão -->
    <!-- Dica: o campo deve manter o valor do filtro atual usando value="<?= htmlspecialchars($filtro) ?>" -->

    <?php if (empty($filtrados)): ?>
        <!-- TODO: exibir mensagem "Nenhum produto encontrado" -->
    <?php else: ?>
        <!-- TODO: montar tabela de produtos filtrados usando foreach -->
        
        <div>
            <!-- TODO: exibir quantidade de produtos, estoque total e preço médio -->
        </div>
    <?php endif; ?>
</body>
</html>
