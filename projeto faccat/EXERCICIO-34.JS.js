let litros_vendidos, tipo_combustivel, total, valor_litros_G, valor_litros_A;

litros_vendidos = parseInt(prompt("Digite quantidade de litros abastecidos: "));
tipo_combustivel = prompt("Tipo de combustivel A/G");

valor_litros_A = 2.90 - (2.90 * 3 / 100);
valor_litros_G = 3.30 - (3.30 * 4 / 100);

if (tipo_combustivel === "A"){
  if (litros_vendidos > 20){
    valor_litros_A = 2.90 - (2.90 * 5 / 100);
  }
  total = litros_vendidos * valor_litros_A;
  console.log("O total a ser pago é: R$", total.toFixed(2));
} else if (tipo_combustivel === "G"){
  if (litros_vendidos > 20){
    valor_litros_G = 3.30 - (3.30 * 6 / 100)
  }
  total = litros_vendidos * valor_litros_G;
  console.log("O total a ser pago é: R$", total.toFixed(2));
}
