<?php
require_once __DIR__ . "/conexao.php";

/*
 * TAREFA:
 * 1. Crie um formulário HTML (método POST) para cadastrar produtos,
 *    com campos: nome e preço.
 * 
 * 2. Ao receber os dados:
 *    - Valide se o nome não está vazio.
 *    - Valide se o preço é numérico.
 *    - Se estiver tudo certo, insira no banco de dados usando prepare() e execute().
 * 
 * 3. Após a inserção, liste todos os produtos cadastrados:
 *    - Use SELECT * FROM produtos
 *    - Exiba em uma tabela HTML com as colunas Nome e Preço.
 *    - Se não houver produtos, exiba a mensagem "Nenhum produto encontrado."
 * 
 * DICAS:
 * - Use $_SERVER['REQUEST_METHOD'] === 'POST' para saber se o form foi enviado.
 * - Use htmlspecialchars() ao exibir dados vindos do banco.
 * - Use number_format() para formatar o preço.
 */

// Seu código aqui ↓

?>
