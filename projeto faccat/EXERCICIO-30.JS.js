let primeiro_valor, segundo_valor, terceiro_valor;

primeiro_valor = parseFloat(prompt("Digite o primeiro valor:"));
segundo_valor = parseFloat(prompt("Digite o segundo valor:"));
terceiro_valor = parseFloat(prompt("Digite o terceiro valor:"));

if (primeiro_valor > segundo_valor) {
    let teste = primeiro_valor;
    primeiro_valor = segundo_valor;
    segundo_valor = teste;
}

if (segundo_valor > terceiro_valor) {
    let teste = segundo_valor;
    segundo_valor = terceiro_valor;
    terceiro_valor = teste;
}

if (primeiro_valor > segundo_valor) {
    let teste = primeiro_valor;
    primeiro_valor = segundo_valor;
    segundo_valor = teste;
}

console.log("Os valores em ordem crescente são:", primeiro_valor + ", " + segundo_valor + ", " + terceiro_valor);