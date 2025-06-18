let prompt = require('prompt-sync')();

console.log('=== Calculadora Simples ===');
console.log('Escolha a Operação');
console.log('Soma => (1)');
console.log('Subtração => (2)');
console.log('Multiplicação => (3)');
console.log('Divisão => (4)');
console.log('=== Calculadora Simples ===');

//solicitação de operação desejada 
let operação = prompt('Digite a operação desejada: ( 1 a 4): ');

console.log('Escolha a operação desejada: ')
//solicitção de valores 
let numero1 = parseInt(prompt('Digite o primeiro numero: '));
let numero2 = parseInt(prompt('Digite o segundo numero: '));

let resultado;

//calculo da operação desejada 
if(operacao === '1'){
    resultado = (numero1 + numero2);
    console.log('o resultado da soma eh:', resultado);
}
