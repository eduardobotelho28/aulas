<?php
// : Capturar valores enviados via GET (temperatura, escala, erro)
// Dica: use $_GET['chave'] ?? '' e isset($_GET['erro'])
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Conversor de Temperaturas</title>
</head>
<body>
    <h1>Conversor de Temperaturas</h1>

    <form action="conversor.php" method="get">
        <label for="temperatura">Temperatura</label>
        <input 
            type="text" 
            name="temperatura" 
            id="temperatura" 
            value=""
        >

        <label for="escala">Escala</label>
        <select name="escala" id="escala">
            <option value="">--Selecione a Escala--</option>
            <option value="C" >Celsius</option>
            <option value="F" >Fahrenheit</option>
        </select>

        <button type="submit">Converter</button>
    </form>

    <?php if ($erro): ?>
        <!-- : exibir mensagem de erro em vermelho -->
    <?php endif; ?>
</body>
</html>
