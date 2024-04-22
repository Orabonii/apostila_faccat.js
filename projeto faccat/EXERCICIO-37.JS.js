let morango_kg, macas_kg, preco_morango, taxa_desconto;
let preco_macas, quilos_total, total_compra, preco_final;

morango_kg = parseFloat(prompt("Quantidade de morangos em KG:"));
macas_kg = parseFloat(prompt("Quantidade de maçãs em KG:"));

if (morango_kg <= 5) {
    preco_morango = morango_kg * 2.5;
    console.log("Preço dos morangos: R$", preco_morango);
} else {
    preco_morango = morango_kg * 2.2;
    console.log("Preço dos morangos: R$", preco_morango);
}

if (macas_kg <= 5) {
    preco_macas = macas_kg * 1.8;
    console.log("Preço das maçãs: R$", preco_macas);
} else {
    preco_macas = macas_kg * 1.5;
    console.log("Preço das maçãs: R$", preco_macas);
}

quilos_total = morango_kg + macas_kg;

total_compra = preco_macas + preco_morango;
console.log("Preço total da compra: R$", total_compra);
console.log("");

if (quilos_total > 8 || total_compra > 25) {
    taxa_desconto = 0.10 * total_compra;
    preco_final = total_compra - taxa_desconto;

    console.log("Preço total da compra com desconto: R$", preco_final);
}
