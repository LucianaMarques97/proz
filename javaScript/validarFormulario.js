function validarFormulario() {
  // Obter os valores dos campos de entrada
  let nome = document.getElementById('nome').value;
  let numeroCartao = document.getElementById('numero').value;

  // Limpar mensagens de erro anteriores
  document.getElementById('nomeErro').innerHTML = '';
  document.getElementById('numeroErro').innerHTML = '';

  // Validar o campo Nome (não pode estar em branco)
  if (nome === '') {
    document.getElementById('nomeErro').innerHTML = 'O nome é obrigatório.';
    return false; // Impedir o envio do formulário
  }
  // Validar o campo Numero do Cartão (não pode estar em branco)
  if (numeroCartao === '') {
    document.getElementById('numeroErro').innerHTML = 'Por favor, preencha um número válido';
    return false; // Impedir o envio do formulário
  }


  // OBS: Ainda tem que pegar os dados do usuário e salvar no local storage *****************************




  // Redirecionando para abrir outra página, seja de entrega ou de agradecimento pela compra
  redirect()
}

function redirect() {
  setTimeout(function () { renderizarFormEndereco() });

}




// renderiza a forma de pagamento escolhido!
let boleto = document.getElementById('boleto');
let cartao = document.getElementById('cartao');
let pix = document.getElementById('pix');
function formaPagamentoEscolhida(formaPg) {

  if (formaPg === 'pix') {
    pix.classList.remove('hiden');
    cartao.classList.add('hiden');
    boleto.classList.add('hiden');
  } else if (formaPg === 'boleto') {
    pix.classList.add('hiden');
    cartao.classList.add('hiden');
    boleto.classList.remove('hiden');
  } else {
    pix.classList.add('hiden');
    cartao.classList.remove('hiden');
    boleto.classList.add('hiden');
  }
}




// Renderizar endereço
const endereco = document.getElementById('endereco');
function renderizarFormEndereco() {
  pix.classList.add('hiden');
  cartao.classList.add('hiden');
  boleto.classList.add('hiden');
  endereco.classList.remove('hiden');
}


// Validar campos do formulário de endereço
function validarEndereco() {
  // Obter os valores dos campos de entrada
  let endereco = document.getElementById('txtEndereco').value;
  let bairro = document.getElementById('txtBairro').value;
  let numero = document.getElementById('txtNumero').value;
  let cidade = document.getElementById('txtCidade').value;

  // Limpar mensagens de erro anteriores
  document.getElementById('nomeErro').innerHTML = '';
  document.getElementById('numeroErro').innerHTML = '';

  // Validar os campos (não pode estar em branco)
  if (endereco === '' || bairro === '' || numero === '' || cidade === '') {
    document.getElementById('nomeErro').innerHTML = 'O campo não pode ficar em branco';
    return false; // Impedir o envio do formulário
  }

  // Se todos os campos forem válidos, permita o envio do formulário com return true ou um redirecionamento manual
  obrigado()
}

function obrigado() {
  setTimeout(function () { window.location = "./html/obrigado.html", "_self" });
}