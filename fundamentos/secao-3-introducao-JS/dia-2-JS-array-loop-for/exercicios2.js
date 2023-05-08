// fazendo o fatorial de 10 10!

let n1 = 10;
let fator = n1;
for (let index = 1; index <= n1; index += 1){
    fator *= index;
}
console.log(fator);

// invertendo uma palavra
let word = 'trybe';
let invertida = [];

for (let index = word.length; index > 0; index -= 1){
    invertida.push(word[index -1]);
}

console.log(invertida.join(''));

//mostrar a maior palavra e a menor palavra
let array = ['java', 'javaScript', 'python', 'html', 'css'];
let maior = '';
let menor = '';

for (let index = 0; index < array.length; index += 1){
    let palavra = array[index];
    if (palavra.length > maior.length){
        maior = palavra;
    }
}
console.log(maior);
menor = maior;

for (let index = 0; index < array.length; index += 1) {
    let palavra = array[index];
    if (palavra.length < menor.length) {
        menor = palavra;
    }
}

console.log(menor);


