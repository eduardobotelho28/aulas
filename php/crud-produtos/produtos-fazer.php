<?php
require_once __DIR__ . "/conexao.php";

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['nome']   ;
    $preco = $_POST['preco'] ;

    if(!empty($preco) AND is_numeric($preco)) {

        $preperado = $conn->prepare("INSERT INTO produtos (nome,preco) VALUES (:nome, :preco)");

        $preperado->bindValue(':nome', $name);
        $preperado->bindValue(':preco', $preco);
        $preperado->execute();
        
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
    <meta name="viewport" content="width=], initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1>Cadastro de Produtos</h1>


    <form action="" method="POST">
        Nome
        <input type="text" placeholder="Digite aqui o nome" name="nome"> </input>
        
        preço
        <input type="text" placeholder="Digite aqui o preço" name="preco"> </input>
        <button>Enviar</button>
    </form>

    <?php if(empty($produtos)) : ?>

        <p>Nenhum produto no banco ainda...</p>

    <?php else : ?>

    <table border="2">

            <tr>
                <td>Nome</td>
                <td>Preco</td>
            </tr>

            <?php foreach ($produtos as $produto) : ?>
            
                <tr>
                    <td> <?= $produto['nome'] ?>  </td>
                    <td> <?= $produto['preco']?>  </td>
                </tr>

            <?php endforeach ?>

    </table>

    <?php endif ?>
    
</body>
</html>
