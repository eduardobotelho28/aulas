<?php

$produtos = [

    [ 
        "codigo"   => "12345", 
        "nome"     => "produto1", 
        "preco"    => "20", 
        "estoque"  => 1 ,
    ],

    [ 
        "codigo"   => "12345", 
        "nome"     => "produto2", 
        "preco"    => "30", 
        "estoque"  => 1 ,
    ],

    [ 
        "codigo"   => "12345", 
        "nome"     => "produto3", 
        "preco"    => "20", 
        "estoque"  => 1 ,
    ],

    [ 
        "codigo"   => "12345", 
        "nome"     => "produto4", 
        "preco"    => "40", 
        "estoque"  => 1 ,
    ],

    [ 
        "codigo"   => "12345", 
        "nome"     => "produto5", 
        "preco"    => "50", 
        "estoque"  => 1 ,
    ],

];


$quantidadeProdutos = count($produtos);

$somaPrecos = 0;
$somaEstoque = 0;

foreach ($produtos as $produto) {
    
    $precoAtual = $produto['preco'];
    $somaPrecos = $somaPrecos + $precoAtual;

    $estoqueAtual = $produto['estoque'];
    $somaEstoque = $somaEstoque + $estoqueAtual;

}

if($quantidadeProdutos > 0) {
    $precoMedio = $somaPrecos/$quantidadeProdutos;
}

else  {
    $precoMedio = 0;
}

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Relatório de Produtos</title>
    <style>
        
    </style>
</head>
<body>
    <h1>Relatório de Produtos</h1>

    <?php if (empty($produtos)): ?>
         <p>Nenhum Produto Encontrado</p>
    <?php else: ?>

        <table border="2" >

            <tr>
                <td>Nome </td>
                <td>Codigo</td>
                <td>Estoque</td>
                <td>Preço</td>
            </tr>


            <?php foreach ($produtos as $produto) : ?> 

                <tr>
                   <td> <?= $produto['nome'] ?>   </td>
                   <td> <?= $produto['codigo'] ?>  </td>
                   <td> <?= $produto['estoque'] ?>  </td>
                   <td> <?= number_format($produto['preco'], 2, ',', '.') ?>  </td> 
                </tr>

            <?php endforeach ?>

        </table>
        
        <div>
          <p> Quantidade de Produtos :  <?= $quantidadeProdutos ?> </p>
          <p> Soma do Estoque :  <?= $somaEstoque ?> </p>
          <p> Preço Médio :  <?= number_format($precoMedio, 2, ',', '.') ?> </p>
        </div>
    <?php endif; ?>
</body>
</html>
