let cod_usuario;

cod_usuario = parseInt(prompt("Coloque seu Código de Usuário:"));

if (cod_usuario === 1234) {
    console.log("Usuário Inválido!");
} else {
    if (cod_usuario === 9999) {
        console.log("Acesso Permitido");
    } else {
        console.log("Senha incorreta!");
    }
}
