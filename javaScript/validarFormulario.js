const btn = document.querySelector('.btn-pagamento')

btn.addEventListener("click", (e) => { validarFormulario(e) })

function validarFormulario(e) {
  e.preventDefault()
  // Obter os valores dos campos de entrada
  let nome = document.getElementById('nome').value;
  let numeroCartao = document.getElementById('numero').value;

  // Limpar mensagens de erro anteriores
  document.getElementById('nomeErro').innerHTML = '';
  document.getElementById('numeroErro').innerHTML = '';

  // Validar o campo Nome (não pode estar em branco)
  if (nome === '') {
    document.getElementById('nomeErro').innerHTML = 'O nome é obrigatório.';
    document.getElementById('nome').focus()
    return false; // Impedir o envio do formulário
  }
  // Validar o campo Numero do Cartão (não pode estar em branco)
  if (numeroCartao === '') {
    document.getElementById('numeroErro').innerHTML = 'Por favor, preencha um número válido';
    document.getElementById('numero').focus()

    return false; // Impedir o envio do formulário
  }

  // OBS: Ainda tem que pegar os dados do usuário e salvar no local storage *****************************

  // Redirecionando para abrir outra página, seja de entrega ou de agradecimento pela compra
  // redirect()
  renderizarFormEndereco()
}

function redirect() {
  // setTimeout(renderizarFormEndereco(), 2000);
  // setTimeout(function () { renderizarFormEndereco() });

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








// inicio dos testes dos correios

function validarEndereco() {
  // Aqui você pode adicionar lógica de validação adicional antes de enviar o formulário
  return true;
}

document.getElementById("txtEndereco1").addEventListener("blur", function () {
  var cepValor = this.value.trim().replace(/[^0-9]/g, '');

  if (cepValor !== '') {
      var validacep = /^[0-9]{8}$/;
      

      if (validacep.test(cepValor)) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", "https://viacep.com.br/ws/" + cepValor + "/json/");
          xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status === 200) {
                  var dados = JSON.parse(xhr.responseText);
                  if (!("erro" in dados)) {
                      document.getElementById("txtRua").value = dados.logradouro;
                      document.getElementById("txtBairro").value = dados.bairro;
                      document.getElementById("txtCidade").value = dados.localidade;
                      document.getElementById("ddlUF").value = dados.uf
                      document.getElementById("txtNumero").focus();
                  } else {
                      alert("CEP não encontrado. Preencha as informações manualmente.");
                      document.getElementById("txtEndereco").focus();
                  }
              }
          };
          xhr.send();
      } else {
          alert("Formato inválido para CEP.");
      }
  } else {
      alert("O campo CEP não pode estar vazio.");
  }
});
//fim dos testes de endereço





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
  let endereco = document.getElementById('txtEndereco1').value;
  let bairro = document.getElementById('txtBairro').value;
  let numero = document.getElementById('txtNumero').value;
  let cidade = document.getElementById('txtCidade').value;

  // Limpar mensagens de erro anteriores
  document.getElementById('campoErro').innerHTML = '';

  // Validar os campos (não pode estar em branco)
  if (endereco === '' || bairro === '' || numero === '' || cidade === '') {
    document.getElementById('campoErro').innerHTML = 'Os campos com * são obrigatórios';
    return false; // Impedir o envio do formulário
  }

  // Se todos os campos forem válidos, permita o envio do formulário com return true ou um redirecionamento manual
  obrigado()
}

function obrigado() {
  setTimeout(function () { window.location = "./obrigado.html", "_self" });
}