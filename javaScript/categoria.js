let idSelecionado
let valoresEncontrados = []



function renderizarCardClicado() {
  produtoSelecionadoPorClick = valoresEncontrados;
  img = produtoSelecionadoPorClick[0].img;
  nome = produtoSelecionadoPorClick[0].nome;
  tamanho = produtoSelecionadoPorClick[0].tamanho;
  cor = produtoSelecionadoPorClick[0].cor;
  valor = produtoSelecionadoPorClick[0].valor;
  categoria = produtoSelecionadoPorClick[0].categoria;
  identidade = produtoSelecionadoPorClick[0].id;
}

const pgCategoria = document.querySelector('.pgCategoria')
function preencherCatalogoPgcategoria() {
  ROUPAS.sapatos.forEach((sapatos) => {
    const novaLi = document.createElement('li');
    const link = document.createElement('a');
    const imagem = document.createElement('img');

    link.href = '#';
    imagem.src = `.${sapatos.img}`;
    imagem.alt = 'sapato';
    imagem.dataset.id = sapatos.id

    link.addEventListener('click', (event) => {
      event.preventDefault();
      idSelecionado = event.target.dataset.id;
      localStorage.clear()
      localStorage.setItem('novoId', idSelecionado);


      window.scrollTo({ top: 80, behavior: 'smooth' });

      valoresEncontrados = []
      encontrarValoresPorId(idSelecionado, ROUPAS)
      renderizarCardClicado()

      preencherProdutoSelecionado();
    })

    link.appendChild(imagem);
    novaLi.appendChild(link);

    const ulSapatos = pgCategoria.querySelector('#sapatoPghome');
    ulSapatos.appendChild(novaLi);


  })
}
//
preencherCatalogoPgcategoria();

let idRoupa = localStorage.getItem('idRoupaSelecionada')
let novoId = localStorage.getItem('novoId')
if (idRoupa == null){
  idRoupa = novoId;
}
console.log('velha Id '+idRoupa);
console.log( 'nova id '+novoId)



function encontrarValoresPorId(id, objeto) {
  ;

  // Procurar na categoria "sapato"
  objeto.sapatos.forEach((sapato) => {
    if (sapato.id === id) {
      valoresEncontrados.push(sapato);
    }
  });



  // return valoresEncontrados;
  return valoresEncontrados

}


encontrarValoresPorId(idRoupa, ROUPAS);

let produtoSelecionadoPorClick2 = valoresEncontrados;
let img = produtoSelecionadoPorClick2[0].img;
let nome = produtoSelecionadoPorClick2[0].nome;
let tamanho = produtoSelecionadoPorClick2[0].tamanho;
let cor = produtoSelecionadoPorClick2[0].cor;
let valor = produtoSelecionadoPorClick2[0].valor;
let categoria = produtoSelecionadoPorClick2[0].categoria;
let identidade = produtoSelecionadoPorClick2[0].id;


function produtoSelecionado() {
  let teste =
    `<div class="produto-mais-vendido">
  <a href="../${categoria}.html ">
   <img class="img-mais-vendido" idProdutoSelecionado="${identidade}" src=".${img}"
   alt="${nome}">
   </a>
   </div>
   <div id="descProduto" class="desc-prod-home">
 <p>Produto </p><span>${nome}</span>
 <p>Tamanho </p><span>${tamanho}</span>
 <p>Cor </p><span>${cor}</span>
 <p>R$ </p><span>${valor}</span>

 

 <a class="botao-comprar" href="../html/carrinho.html">Comprar</a>
 <a class="carrinho-btn" id="${identidade}"><img src="../img/carrinho.svg"></a>

</div>`

  return teste
}

let listaDeNumeros = [];

function preencherProdutoSelecionado() {
  const pgCategoriaProdutoSelecionado = document.querySelector('.produto-mais-vendido')
  pgCategoriaProdutoSelecionado.innerHTML = produtoSelecionado();

  //inicio dos testes com carrinho


let idProdutoProCarrinho = document.getElementById(identidade);
if (idProdutoProCarrinho) {
  idProdutoProCarrinho.addEventListener("click", () => {
    
  
    const numeroDaVariavel = identidade;

    listaDeNumeros.push(numeroDaVariavel);

    console.log("produtos no carrinho! ", listaDeNumeros);
  });
}


// fim dos teste com carrinho


}




preencherProdutoSelecionado();






