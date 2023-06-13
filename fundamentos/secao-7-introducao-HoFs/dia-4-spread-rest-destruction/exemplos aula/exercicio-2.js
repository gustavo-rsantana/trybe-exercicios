const sum = (...parans) => parans.reduce((acc, curr) => acc + curr, 0);

console.log(sum(2, 4, 10, 15, 25));