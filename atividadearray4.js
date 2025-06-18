let prompt = require('prompt-sync')();
let numeros = [10,15,20,25,30,35,40];
// let novoNumero = parseFloat(prompt('adicionar novo nr: '));
let quantidade = parseFloat(prompt('digite a qtd de nr: '));

//push adiciona um novo elemento no array
// numeros.push ('novo numero')

for(i=0; i<quantidade; i++)
{
    let novoNumero = parseFloat(prompt('digite novo nr: '+ (i+1)));
    numeros.push ('novoNumero');
for(i=0; i<=numeros.length; i++)

console.log('A posição ' + i + ' eh '+ [numeros[i]])
}
// console.log(numeros);