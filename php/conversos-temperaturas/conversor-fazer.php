<?php
// TODO: Obter temperatura (usando filter_input com FILTER_VALIDATE_FLOAT) e escala via $_GET
// TODO: Validar se ambos foram informados corretamente
// - Se faltar algo, redirecionar para form.php com erro=1 e valores anteriores (use header("Location: ...") + exit())

// TODO: Fazer a conversão conforme a escala selecionada
// - Se for Celsius, converter para Fahrenheit (F = C * 9/5 + 32)
// - Se for Fahrenheit, converter para Celsius (C = (F - 32) * 5/9)

// TODO: Exibir o resultado formatado com number_format e unidades corretas
// TODO: Incluir link "Voltar" com os valores anteriores mantidos
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Conversor de Temperaturas</title>
</head>
<body>
    <h1>Conversor de Temperaturas</h1>

    <!-- TODO: Exibir resultados (temperatura original e convertida) -->
    <!-- TODO: Adicionar link para retornar ao formulário -->
</body>
</html>
