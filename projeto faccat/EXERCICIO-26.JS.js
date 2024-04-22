let quantidade_atual, quantidade_maxima, quantidade_minima, quantidade_media;

quantidade_atual=parseInt(prompt("Quantidade atual no estoque"));
quantidade_maxima=parseInt(prompt("Quantidade maxima no estoque"));
quantidade_minima=parseInt(prompt("Quantidade minima no estoque"));

quantidade_media=((quantidade_maxima+quantidade_minima) / 2);

if (quantidade_atual >= quantidade_media){
  console.log("Não efetue a compra")
}else{
  console.log("Efetue a compra")
}