<?php
// TODO: verificar se o método é POST, caso contrário redirecionar para formulario.php

// TODO: coletar os dados do formulário e armazenar em variáveis
//       (nome, ingresso, curso, turno, matriculado)

// TODO: criar um array $erros e realizar as validações:
//       - nome informado e com pelo menos 3 letras
//       - ingresso informado, numérico, e entre 2006 e 2025
//       - curso selecionado
//       - turno informado

// TODO: mapear o código do curso (inf, mct, etc.) para o nome completo usando switch

// TODO: se não houver erros, exibir uma div com os dados válidos
//       caso contrário, exibir uma lista de erros
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validação dos Dados</title>
</head>
<body>
    <h1>Validação dos Dados</h1>

    <!-- TODO: exibir dinamicamente os resultados (erros ou dados válidos) -->

    <p><a href="formulario.php">Voltar ao formulário</a></p>
</body>
</html>
