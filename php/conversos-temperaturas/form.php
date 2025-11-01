<?php
// Captura valores anteriores enviados via GET (para preencher o formulário novamente)
$temperatura = $_GET['temperatura'] ?? '';
$escala = $_GET['escala'] ?? '';
$erro = isset($_GET['erro']); // verifica se veio erro na URL
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
            value="<?= htmlspecialchars($temperatura) ?>"
        >

        <label for="escala">Escala</label>
        <select name="escala" id="escala">
            <option value="">--Selecione a Escala--</option>
            <option value="C" <?= $escala === 'C' ? 'selected' : '' ?>>Celsius</option>
            <option value="F" <?= $escala === 'F' ? 'selected' : '' ?>>Fahrenheit</option>
        </select>

        <button type="submit">Converter</button>
    </form>

    <?php if ($erro): ?>
        <p style="color:red;">Erro: verifique se os campos estão preenchidos corretamente.</p>
    <?php endif; ?>
</body>
</html>
