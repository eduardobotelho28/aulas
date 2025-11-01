<?php
$produtos = [

    [
        "codigo"   => "12345",
        "nome"     => "chocolate",
        "preco"    => "20",
        "estoque"  => 1,
    ],

    [
        "codigo"   => "12345",
        "nome"     => "refrigerante",
        "preco"    => "30",
        "estoque"  => 1,
    ],

    [
        "codigo"   => "12345",
        "nome"     => "tapioca",
        "preco"    => "20",
        "estoque"  => 1,
    ],

    [
        "codigo"   => "12345",
        "nome"     => "sabonete",
        "preco"    => "40",
        "estoque"  => 1,
    ],

    [
        "codigo"   => "12345",
        "nome"     => "água",
        "preco"    => "50",
        "estoque"  => 1,
    ],

];

// Captura o filtro via GET (ou string vazia se não houver)
$filtro = $_GET['filtro'] ?? "";

$filtrados = [];

if($filtro != "") {

    foreach ($produtos as $produto) {
        if (stripos($produto["nome"], $filtro) !== false) {
            $filtrados[] = $produto; 
        }
    }
}

else {
    $filtrados = $produtos;
}

$quantidadeProdutos = count($filtrados);

$somaPrecos = 0;
$somaEstoque = 0;

foreach ($filtrados as $produto) {

    $precoAtual = $produto['preco'];
    $somaPrecos = $somaPrecos + $precoAtual;

    $estoqueAtual = $produto['estoque'];
    $somaEstoque = $somaEstoque + $estoqueAtual;
}

if ($quantidadeProdutos > 0) {
    $precoMedio = $somaPrecos / $quantidadeProdutos;
} else {
    $precoMedio = 0;
}


// TODO: Obter o valor do filtro via $_GET['filtro'] (ou string vazia se não existir)

// TODO: Filtrar os produtos usando stripos() para buscar parte do nome, ignorando maiúsculas/minúsculas
// - Se houver filtro, criar um array $filtrados apenas com produtos correspondentes
// - Se o filtro estiver vazio, $filtrados deve receber todos os produtos


?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Relatório de Produtos com Filtro</title>
    <style>
        
    </style>
</head>

<body>
    <h1>Relatório de Produtos</h1>

    <?php if (empty($filtrados)): ?>
        <p>Nenhum Produto Encontrado</p>
    <?php else: ?>

        <form action="" method="GET">

            Filtro
            <input type="text"  placeholder="Digite aqui o filtro" name="filtro" value="<?=$filtro?>">  </input>
            <button>Enviar</button>

        </form>

        <br>

        <table border="2">

            <tr>
                <td>Nome </td>
                <td>Codigo</td>
                <td>Estoque</td>
                <td>Preço</td>
            </tr>


            <?php foreach ($filtrados as $produto) : ?>

                <tr>
                    <td> <?= $produto['nome'] ?> </td>
                    <td> <?= $produto['codigo'] ?> </td>
                    <td> <?= $produto['estoque'] ?> </td>
                    <td> <?= number_format($produto['preco'], 2, ',', '.') ?> </td>
                </tr>

            <?php endforeach ?>

        </table>

        <div>
            <p> Quantidade de Produtos : <?= $quantidadeProdutos ?> </p>
            <p> Soma do Estoque : <?= $somaEstoque ?> </p>
            <p> Preço Médio : <?= number_format($precoMedio, 2, ',', '.') ?> </p>
        </div>
    <?php endif; ?>
</body>

</html>