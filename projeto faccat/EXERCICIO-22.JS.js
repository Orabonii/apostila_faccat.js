let horas_trabalhadas, salario_hora, salario_total, horas_extras

horas_trabalhadas=parseInt(prompt("Digite horas trabalhadas neste mês"))
salario_hora=parseInt(prompt("Digite o salario por hora"))
salario_total = salario_hora * horas_trabalhadas
if (horas_trabalhadas > 160){
  horas_extras=horas_trabalhadas-160
  salario_total=salario_total+(horas_extras*horas_trabalhadas)*0.5
  alert(`O salario total do funcionario com acresimos é:R$${salario_total}`)
} else {
  alert(`O salario total do funcionario sem acresimos é:R$${salario_total}`)
}