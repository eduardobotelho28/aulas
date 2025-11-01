<?php
// : Criar um array associativo de produtos com as chaves: codigo, nome, preco e estoque.
// Cada produto deve ser um elemento dentro de um array principal ($produtos).

// : Calcular dinamicamente:
// - A quantidade de produtos
// - O estoque total (somando os estoques)
// - O preço médio (média dos preços, cuidando para não dividir por zero)

// Dica: utilize as funções count(), number_format() e empty() conforme o enunciado.
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Relatório de Produtos</title>
    <style>
        /* : estilizar a tabela (bordas simples, espaçamento e largura adequada) */
    </style>
</head>
<body>
    <h1>Relatório de Produtos</h1>

    <?php if (empty($produtos)): ?>
        <!-- : exibir mensagem "Nenhum produto encontrado" -->
    <?php else: ?>
        <!-- : construir tabela com as colunas Código, Nome do Produto, Estoque e Preço -->
        <!-- Dica: usar foreach na sintaxe alternativa -->
        
        <div>
            <!-- : exibir quantidade, estoque total e preço médio -->
        </div>
    <?php endif; ?>
</body>
</html>
