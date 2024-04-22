let salario_fixo, total_vendas, calculo;

salario_fixo=parseFloat(prompt("Digite seu salário fixo: R$"));
total_vendas=parseFloat(prompt("Digite o valor das vendas, feitas pelo vendedor"))

if (total_vendas > 1500) {
  calculo = (total_vendas * 0.3) + salario_fixo;
  console.log("Antigo salário era de R$",salario_fixo);
  console.log("Novo salário com a taxa de comissão, de 3% fica: R$",calculo);
} else{
  calculo = (total_vendas * 0.3)+(total_vendas * 0.5)+ salario_fixo;
  console.log("Antigo salário era de R$",salario_fixo);
  console.log("Novo salário com a taxa de comissão, de 3%+5% fica: R$",calculo);
}