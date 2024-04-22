let numero1, numero2;

numero1=parseInt(prompt("Digite o primeiro número"));
numero2=parseInt(prompt("Digite o segundo número"));

if (numero1 > numero2){
  console.log("O primeiro número",numero1,"é o maior!!");
} else if (numero2 > numero1){
  console.log("O segundo número",numero2,"é o maior!!");
} else {
  console.log("Números iguais!!");
}