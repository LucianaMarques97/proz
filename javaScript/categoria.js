//
const pgCategoria = document.querySelector('.pgCategoria')
function preencherCatalogoPgcategoria() {
  ROUPAS.sapatos.forEach((sapatos)=> {
    const novaLi = document.createElement('li');
    const link = document.createElement ('a');
    const imagem = document.createElement('img');
    
    link.href = '#';
    imagem.src = `.${sapatos.img}`;
    imagem.alt = 'sapato';

    link.appendChild(imagem);
    novaLi.appendChild(link);

    const ulSapatos = pgCategoria.querySelector('#sapatoPghome');
    ulSapatos.appendChild(novaLi);

  })
}
//
preencherCatalogoPgcategoria();