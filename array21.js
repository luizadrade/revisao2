let precos = [100, 200, 50];
let precosComJuros = precos.map(function(preco) { /* Para cada 'preco', retorna o valor + 10% */ return preco * 1.10;});

console.log("Preços Originais:", precos);
console.log("Preços com Juros (map):", precosComJuros);