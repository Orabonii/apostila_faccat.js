let nota1, nota2, nota3, media_exercicios, media_aproveitamento;

nota1 = parseFloat(prompt("Digite a nota da primeira verificação:"));
nota2 = parseFloat(prompt("Digite a nota da segunda verificação:"));
nota3 = parseFloat(prompt("Digite a nota da terceira verificação:"));
media_exercicios = parseFloat(prompt("Digite a média dos exercícios:"));

media_aproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + media_exercicios) / 7;

console.log("Média de aproveitamento: ", media_aproveitamento.toFixed(2));

if (media_aproveitamento >= 9.0) {
    console.log("Conceito: A");
} else {
    if (media_aproveitamento >= 7.5) {
        console.log("Conceito: B");
    } else {
        if (media_aproveitamento >= 6.0) {
            console.log("Conceito: C");
        } else {
            console.log("Conceito: D");
        }
    }
}
