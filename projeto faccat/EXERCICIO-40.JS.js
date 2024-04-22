let produto_quantidade, produto_preco_unidade, total, total_a_pagar, desconto, taxa_desconto, produto_nome;

produto_nome = prompt("Digite o nome do produto:");
produto_quantidade = parseFloat(prompt("Digite quantas unidades você comprou:"));
produto_preco_unidade = parseFloat(prompt("Digite o preço unitário do produto:"));
total = produto_quantidade * produto_preco_unidade;

if (produto_quantidade <= 5) {
    taxa_desconto = 0.02;
} else {
    if (produto_quantidade <= 10) {
        taxa_desconto = 0.03;
    } else {
        taxa_desconto = 0.05;
    }
}

desconto = total * taxa_desconto;
total_a_pagar = total - desconto;

console.log("Total da compra: R$", total.toFixed(2));
console.log("");
console.log("Desconto aplicado: R$", desconto.toFixed(2));
console.log("");
console.log("Total a pagar: R$", total_a_pagar.toFixed(2));