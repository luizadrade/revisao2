let produtos = ['placa mae','processador','memoria ram','ssd'];
produtos.push('placa de video','fonte');
// Acessando Itens 
let primeiroProduto = produtos[0]; /* Pega o item no índice 0 */
let segundoProduto = produtos[1]; /* Pega o item no índice 1 */
console.log("O primeiro produto é:", primeiroProduto); // Saída: Placa Mãe
console.log("O segundo produto é:", segundoProduto); // Saída: Processador // --- Modificando Itens ---
produtos[2] = 'SSD 240GB'; /* Troca 'Memória RAM' por 'SSD 240GB' */
console.log("Array modificado:", produtos); // Saída: ['Placa Mãe', 'Processador', 'SSD 240GB']
// // --- E se acessar um índice que não existe? ---
let itemInexistente = produtos[5];
console.log("Item no índice 5:", itemInexistente); 
// Saída: undefined (indefinido)

