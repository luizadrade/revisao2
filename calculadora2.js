let prompt = require('prompt-sync')();

console.log('=== Calculadora Simples ===\n');
console.log('Escolha a Operação\n');
console.log('Soma => (1)');
console.log('Subtração => (2)');
console.log('Multiplicação => (3)');
console.log('Divisão => (4)');
console.log('=== Calculadora Simples ===\n');

//solicitação de operação desejada 
let operacao = prompt('Digite a operação desejada: ( 1 a 4): ');

console.log('Escolha a operação desejada: ');

//solicitção de valores 
let numero1 = parseInt(prompt('Digite o primeiro numero: '));
let numero2 = parseInt(prompt('Digite o segundo numero: '));
let resultado;

//verifica se os valores digitados sao validos 
if (isNaN(numero1) || isNaN(numero2)) {
    console.log('erro! voce deve digitar numeros validos.');
}

//calculo da operação desejada 
if(operacao === '1'){
    resultado = (numero1 + numero2);
    console.log('o resultado da soma eh: ', resultado);
}else if(operacao === '2'){
    resultado = (numero1 - numero2);
    console.log(' o resultado da subtracao eh:', resultado)
}
else if (operacao === '3'){
    resultado = (numero1 * numero2);
    console.log('o resultado da multiplicacao eh:', resultado)
}
else if(operacao === '4'){
    resultado = (numero1 / numero2);
    console.log('o resultado da divisao eh:', resultado)
}

else if (operacao === '4'){
    if (numero2 === 0) {
        console.log('erro! divisao por zero e permitido')
    }
}