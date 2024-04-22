let anos, meses, dias, idade;

anos=parseInt(prompt("Digite quantos anos completos você tem"));
meses=parseInt(prompt("Digite quantos meses se passaram apos o seu ultimo aniversario"));
dias=parseInt(prompt("Escreva quantidade de dias que passou apos seu ultimo aniversario"));
idade = (anos * 365 + meses * 30 + dias);

alert("Você tem "+idade+" dias de vida")