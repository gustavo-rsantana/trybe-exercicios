let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//percorre o array e imprime cada numero contido nele
for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}

// some todos os valores dos array e imprima o resultado
let total = 0;
for (let index = 0; index < numbers.length; index += 1){
    total += numbers[index];
}
console.log('-----------------');
console.log(total);

// calculado a media dos valores do array
let media = total / numbers.length;
console.log('-------------------');
console.log(media);

//verificando se o valor da media e maior que 20

if (media > 20){
    console.log('-------------------');
    console.log('O valor da media aritimetica e maior que 20');
}
else {
    console.log('-------------------');
    console.log('O valor da media aritimetica e menor ou igual a 20');
}

//verificar o maior numero do array e imprimilo
let maior = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > maior){
        maior = numbers[index]
    }
}
console.log('-------------------');
console.log(maior);

//descobrindo quantidade de numeros impares

let impar = 0;

for (let index = 0; index < numbers.length; index += 1){
    if ((numbers[index] % 2) !== 0) {
        impar += 1;
    }
}
console.log('---------------');
console.log(impar);

//descobrindo o menor valor e imprimindo e divindindo por 2

let menor = maior;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] < menor){
        menor = numbers[index]
    }
}
console.log('-------------------');
console.log(menor);

//criando um array que imprima de 1 a 25

console.log('-------------------');
for (let index = 1; index <= 25; index += 1){
    console.log(index +'/ 2 = '+(index/2));
}

