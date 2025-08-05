let prompt = require("prompt-sync")();
let nomefrutas = [
  "pera",
  "maça",
  "laranja",
  "manga",
  ["jiló", "chuchu", "cebola"],
  ["arroz", ["tipo1", "tipo2", "tipo3"]],
];

nomefrutas[1] = "uva";
nomefrutas[4][1] = "morango";
nomefrutas[5][1][1] = "tipoB";
console.log(nomefrutas);
