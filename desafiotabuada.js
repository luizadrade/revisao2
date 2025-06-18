let prompt = require('prompt-sync')();
let numero = parseFloat(prompt('digite o nr. da tabuada: '));
let senha;
let tentativas = 0;
let senhacorreta = 'senai123'
// permite ate 3 tentativas para digitar a senha corretamente
while (tentativas < 3){
senha = prompt('digite a senha: ');
console.log('mostrar o resultado de todas as operacao do: ', numero);
if (senha === senhacorreta){
    console.log('tabuada do: ', numero);
for(let i = 0; i <= 10; i++) {
  console.log(numero + " + " + i + " = " + (numero + i));
  } 
  for(let i = 0; i <= 10; i++) {
  console.log(numero + " - " + i + " = " + (numero - i));
  } for(let i = 0; i <= 10; i++) {
  console.log(numero + " * " + i + " = " + (numero * i));
  } for(let i = 0; i <= 10; i++) {
  console.log(numero + " / " + i + " = " + (numero / i));
  } 
  break; // sai do loop quando a senha estiver corretamente
   }else{tentativas++;
    console.log('senha invalida!tentativa '+ tentativas + 'de 3');
   }
    // se exceder as tentativas,exibe mensagem de bloqueio
    if (tentativas === 3){
      console.log('numero máximo de tentativas excedido.acesso bloqueado.');
}}
console.log('=== Calculadora Simples ===\n');
console.log('Escolha a Operação\n');
console.log('Soma => (1)');
console.log('Subtração => (2)');
console.log('Multiplicação => (3)');
console.log('Divisão => (4)');
console.log('=== Calculadora Simples ===\n');
//solicitação de operação desejada 
let operacao = prompt('Digite o resultado das operacao: ( 1 a 4 ): ');
//solicitção de valores 
let numero1 = parseInt(prompt('Digite o primeiro numero: '));
let numero2 = parseInt(prompt('Digite o segundo numero: '));
let resultado;
//verifica se os valores digitados sao validos 
if (isNaN(numero1) || isNaN(numero2)) {
    console.log('erro! voce deve digitar numeros validos');
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