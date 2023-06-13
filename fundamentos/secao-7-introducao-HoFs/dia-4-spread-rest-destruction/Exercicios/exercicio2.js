const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = (...cars) => cars.map(([modelo, marca, ano]) => ({modelo, marca, ano}));

console.log(toObject(palio, shelbyCobra, chiron));