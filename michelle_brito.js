function imprimePares(N) {
    for (let i = 0; i <= N; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

imprimePares(10);

function somaArray(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
}

console.log(somaArray([1, 2, 3, 4, 5]));

function ePrimo(n) {
    if (n <= 1) {
        return false; // Números menores ou iguais a 1 não são primos
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Se for divisível por algum número entre 2 e a raiz quadrada de n, não é primo
        }
    }
    return true; // Se não for divisível por nenhum número, é primo
}
console.log(ePrimo(7));
console.log(ePrimo(10));

function fizzBuzz() {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

function contaVogais(str) {
    const vogais = "aeiouáéíóúâêîôûãõAEIOUÁÉÍÓÚÂÊÎÔÛÃÕ";
    let contador = 0;

    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            contador++;
        }
    }

    return contador;
}
console.log(contaVogais("Node.js é incrível"));

function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

tabuada(5);

function inverteString(str) {
    return str.split("").reverse().join("");
}

console.log(inverteString("hello"));

function maiorNumero(arr) {
    return Math.max(...arr);
}

console.log(maiorNumero([3, 10, 6, 2]));

function ePalindromo(str) {
    // Remove espaços e converte para minúsculas
    const limpa = str.replace(/\s+/g, "").toLowerCase();
    // Compara a string com sua versão invertida
    return limpa === limpa.split("").reverse().join("");
}

console.log(ePalindromo("Ame a ema"));
console.log(ePalindromo("Olá mundo"));

function calculaMedia(notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    const media = soma / notas.length;
    return media >= 7 ? "Aprovado" : "Reprovado";
}

console.log(calculaMedia([8, 7, 6]));
console.log(calculaMedia([5, 6, 4]));
