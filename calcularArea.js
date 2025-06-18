
//  function calcularAreaRetangulo(base, altura) {
//  return base * altura;
//  }

//  console.log(calcularAreaRetangulo(5, 10)); // Saída: 50

//  function verificarParImpar(numero) {
//  if (numero % 2 === 0) {
//  return "Par";
//  } else {
// return "Ímpar";
//  }
//  }

//  console.log(verificarParImpar(7)); // Saída: Ímpar
//  console.log(verificarParImpar(12)); // Saída: Par

//  const celsiusParaFahrenheit = function(celsius) {
//  return (celsius * 9/5) + 32;
// };

//  console.log(celsiusParaFahrenheit(25)); // Saída: 77

//  const converterParaMaiusculas = texto => texto.toUpperCase();

//  console.log(converterParaMaiusculas("hello world")); // Saída: HELLO WORLD

//  function gerarNomeCompleto(nome, sobrenome) {
//  return nome + " " + sobrenome;
//  }

//  console.log(gerarNomeCompleto("João", "Silva")); // Saída: João Silva








// let numeros = [10, 20, 30, 40, 50];
// console.log(numeros[2]); // Acessa o elemento no índice 2 (30)
// console.log(numeros.length); // Retorna o tamanho do array (5)
// numeros.push(60); // Adiciona 60 ao final: [10, 20, 30, 40, 50, 60]
// let ultimo = numeros.pop(); // Remove e retorna o último elemento (60)
// console.log(numeros); // Saída: [10, 20, 30, 40, 50]
// console.log(ultimo); // Saída: 60
// numeros.unshift(5); // Adiciona 5 no início: [5, 10, 20, 30, 40, 50]
// let primeiro = numeros.shift(); // Remove e retorna o primeiro elemento (5)
// console.log(numeros); // Saída: [10, 20, 30, 40, 50]
// console.log(primeiro); // Saída: 5
// console.log(numeros.indexOf(30)); // Retorna o índice de 30 (2)
// console.log(numeros.indexOf(70)); // Retorna -1 (não encontrado)
// let parte = numeros.slice(1, 4); // Cria uma cópia de elementos do índice 1 até 3: [20, 30, 40]
// console.log(parte); // Saída: [20, 30, 40]
// let removidos = numeros.splice(2, 1, 35); // Remove 1 elemento do índice 2 e adiciona 35
// console.log(numeros); // Saída: [10, 20, 35, 40, 50]
// console.log(removidos); // Saída: [30] (o elemento removido)
// let outrosNumeros = [70, 80];
// let todosNumeros = numeros.concat(outrosNumeros); // Concatena arrays
// console.log(todosNumeros); // Saída: [10, 20, 35, 40, 50, 70, 80]
// let linguagens = ["JavaScript", "Python", "Java"];
// let textoLinguagens = linguagens.join(", ");
// console.log(textoLinguagens); // Saída: JavaScript, Python, Java
// let alfabeto = ["c", "b", "a"];
// alfabeto.sort(); // Ordena em ordem alfabética
// console.log(alfabeto); // Saída: ["a", "b", "c"]
// let numeros2 = [3, 1, 4, 1, 5, 9];
// numeros2.sort((a, b) => a - b); // Ordena numericamente em ordem crescente
// console.log(numeros2); // Saída: [1, 1, 3, 4, 5, 9]
// numeros2.forEach(numero => console.log(numero * 2)); // Itera e exibe o dobro de cada número
// let quadrados = numeros2.map(numero => numero * numero);
// console.log(quadrados); // Saída: [1, 1, 9, 16, 25, 81]
// let pares = numeros2.filter(numero => numero % 2 === 0);
// console.log(pares); // Saída: [4]
// let soma = numeros2.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log("Soma: " + soma); // Saída: Soma: 23
// let primeiroMaiorQueTres = numeros2.find(numero => numero > 3);
// console.log(primeiroMaiorQueTres); // Saída: 4
// let indicePrimeiroMaiorQueTres = numeros2.findIndex(numero => numero > 3);
// console.log("Índice: " + indicePrimeiroMaiorQueTres); // Saída: Índice: 3
// console.log(numeros2.includes(5)); // Saída: true
// console.log(numeros2.includes(10)); // Saída: false







// 1. Criação do array
let nomes = ["Ana", "Carlos", "Mariana", "Pedro"];

// a) Adicione "Sofia"
nomes.push("Sofia");

// b) Remova o primeiro nome e exiba o removido
let nomeRemovido = nomes.shift();
console.log("Nome removido:", nomeRemovido);

// c) Índice do nome "Mariana"
let indiceMariana = nomes.indexOf("Mariana");
console.log("Índice de Mariana:", indiceMariana);

// d) Array com nomes que começam com "M"
let nomesComM = nomes.filter(nome => nome.startsWith("M"));
console.log("Nomes com M:", nomesComM);



// 2
let numeros = [5, 12, 8, 3, 9];

// a) Ordenar em ordem crescente
numeros.sort((a, b) => a - b);
console.log("Ordenado:", numeros);

// b) Novo array com o dobro dos valores
let dobro = numeros.map(num => num * 2);
console.log("Dobro dos valores:", dobro);

// c) Soma dos números
let soma = numeros.reduce((acc, curr) => acc + curr, 0);
console.log("Soma total:", soma);


// 3
let frutas1 = ["maçã", "banana"];
let frutas2 = ["laranja", "uva"];

// a) Concatenar
let todasFrutas = frutas1.concat(frutas2);
console.log("Todas as frutas:", todasFrutas);

// b) Transformar em string separada por "-"
let frutasString = todasFrutas.join("-");
console.log("Frutas como string:", frutasString);


// 4
let idades = [15, 22, 18, 17, 20];

// Verificar se há idade >= 18
let maiorDeIdade = idades.some(idade => idade >= 18);
console.log("Há alguém com 18 anos ou mais?", maiorDeIdade);


// 5
let livros = ["Dom Casmurro", "1984", "O Pequeno Príncipe", "Capitães da Areia"];
let titulo; ("Digite o título do livro");

// Verificar se o título está no array
if (livros.includes(titulo)) {
    console.log("Livro encontrado!");
} else {
    console.log("Livro não encontrado.");
}

