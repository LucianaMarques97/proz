function validarFormulario() {
    // Obter os valores dos campos de entrada
    var nome = document.getElementById('nome').value;
    var numeroCartao = document.getElementById('numero').value;

    // Limpar mensagens de erro anteriores
    document.getElementById('nomeErro').innerHTML = '';
    document.getElementById('numeroErro').innerHTML = '';

    // Validar o campo Nome (não pode estar em branco)
    if (nome === '') {
        document.getElementById('nomeErro').innerHTML = 'O nome é obrigatório.';
        return false; // Impedir o envio do formulário
    }

    if (numeroCartao === '') {
        document.getElementById('numeroErro').innerHTML = 'Por favor, preencha um número válido';
        return false; // Impedir o envio do formulário
    }


    // Se todos os campos forem válidos, permita o envio do formulário
    return true;
}

console.log("teste")