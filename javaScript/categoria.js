const pgCategoria = document.querySelector('.pgCategoria')
function preencherCatalogoPgcategoria() {
  ROUPAS.sapatos.forEach((sapatos)=> {
    const novaLi = document.createElement('li');
    const link = document.createElement ('a');
    const imagem = document.createElement('img');
    
    link.href = '#';
    imagem.src = `.${sapatos.img}`;
    imagem.alt = 'sapato';
    imagem.dataset.id = sapatos.id

    link.addEventListener('click',(event)=>{
      event.preventDefault();
      const idSelecionado = event.target.dataset.id;
      localStorage.setItem('idRoupaSelecionada', idRoupa);

      console.log(idSelecionado)
      window.scrollTo({ top: 80, behavior: 'smooth' });
    })

    link.appendChild(imagem);
    novaLi.appendChild(link);

    const ulSapatos = pgCategoria.querySelector('#sapatoPghome');
    ulSapatos.appendChild(novaLi);


  })
}
//
preencherCatalogoPgcategoria();

const idRoupa = localStorage.getItem('idRoupaSelecionada')
console.log(idRoupa);



function encontrarValoresPorId(id, objeto) {
  const valoresEncontrados = [];

  // Procurar na categoria "sapato"
  objeto.sapatos.forEach((sapato) => {
      if (sapato.id === id) {
          valoresEncontrados.push(sapato);
      }
  });

  // Procurar na categoria "calcas" se não for encontrado nas "blusas"

  // return valoresEncontrados;
  return valoresEncontrados
  
}

encontrarValoresPorId(idRoupa, ROUPAS);
  let produtoSelecionadoPorClick =  encontrarValoresPorId(idRoupa, ROUPAS);
  let img = produtoSelecionadoPorClick[0].img;
  let nome =produtoSelecionadoPorClick[0].nome;
  let tamanho = produtoSelecionadoPorClick[0].tamanho;
  let cor = produtoSelecionadoPorClick[0].cor;
  let valor = produtoSelecionadoPorClick[0].valor.toFixed(2).replace('.', ',');

  let categoria = produtoSelecionadoPorClick[0].categoria;

  function preencherProdutoSelecionado (){
    const pgCategoriaProdutoSelecionado = document.querySelector('.produto-mais-vendido')
    pgCategoriaProdutoSelecionado.innerHTML = produtoSelecionado;
  }


  
  let  produtoSelecionado = 
  `<div class="produto-mais-vendido">
  <a href="../${categoria}.html">
   <img class="img-mais-vendido" src=".${img}"
   alt="${nome}">
   </a>
   </div>
   <div id="descProduto" class="desc-prod-home">
 <p>Produto </p><span>${nome}</span>
 <p>Tamanho </p><span>${tamanho}</span>
 <p>Cor </p><span>${cor}</span>
 <p>R$ </p><span>${valor}</span>
 <a class="botao-comprar" href="../carrinho.html">Comprar</a>
</div>`

preencherProdutoSelecionado();