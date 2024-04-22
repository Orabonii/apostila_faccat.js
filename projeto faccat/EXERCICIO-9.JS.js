let salarioMensal,reajuste,novoSalario;

salarioMensal = parseFloat(prompt("Salario Mensal: "));
reajuste = parseFloat(prompt("Percentual de Reajuste: "));
novoSalario = salarioMensal * reajuste / 100 + salarioMensal;

console.log("O salario depois de Rejustado foi R$",novoSalario);