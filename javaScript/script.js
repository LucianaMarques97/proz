// 
const pgCategoria = document.querySelector('.pgCategoria')
function preencherCatalogoPghome() {
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


// Acesso à div onde queremos inserir as informações
const divBlusa = document.querySelector('.blusas');
const divCalca = document.querySelector('.calcas');
const divSapato = document.querySelector('.sapatos');


// Função para preencher dinamicamente o catálogo de blusas da pg home
function preencherCatalogoBlusas() {
    // Iterar sobre as blusas
    ROUPAS.blusas.slice(0,8).forEach((blusa) => {
        // Criar elementos HTML dinamicamente
        const novaLi = document.createElement('li');
        const link = document.createElement('a');
        const imagem = document.createElement('img');
      

        // Definir os atributos dos elementos
        link.href = './html/categoria.html'; 
        imagem.src = blusa.img;
        imagem.alt = 'blusa';

        // Adicionar a imagem ao link e o link à nova li
        link.appendChild(imagem);
        novaLi.appendChild(link);

        // Adicionar a nova li à lista existente no HTML
        const ulBlusa = divBlusa.querySelector('#blusaHome');
        ulBlusa.appendChild(novaLi);
    });
}
// Chamar a função para preencher dinamicamente o catálogo de blusas


function preencherCatalogoCalca() {
  // Iterar sobre as calça
  ROUPAS.calcas.slice(0.8).forEach((calca) => {
      // Criar elementos HTML dinamicamente
      const novaLi = document.createElement('li');
      const link = document.createElement('a');
      const imagem = document.createElement('img');
      
      // Definir os atributos dos elementos
      link.href = './html/categoria.html'; 
      imagem.src = calca.img;
      imagem.alt = 'calca';
      
      // Adicionar a imagem ao link e o link à nova li
      link.appendChild(imagem);
      novaLi.appendChild(link);
      
      // Adicionar a nova li à lista existente no HTML
      const ulCalca = divCalca.querySelector('#calcaHome');
      ulCalca.appendChild(novaLi);
    });
  }

  
  function preencherCatalogoSapato() {
    // Iterar sobre os sapatos
  ROUPAS.sapatos.slice(0,8).forEach((sapato) => {
    // Criar elementos HTML dinamicamente
    const novaLi = document.createElement('li');
    const link = document.createElement('a');
    const imagem = document.createElement('img');
    
    // Definir os atributos dos elementos
    link.href = `./html/${sapato.categoria}.html`; 
      imagem.src = sapato.img;
      imagem.alt = 'sapato';
      
      // Adicionar a imagem ao link e o link à nova li
      link.appendChild(imagem);
      novaLi.appendChild(link);

      // Adicionar a nova li à lista existente no HTML
      const ulSapato = divSapato.querySelector('#sapatoHome');
      ulSapato.appendChild(novaLi);
    });
  }
  

  // preencherCatalogoBlusas();
  // preencherCatalogoCalca();
  // preencherCatalogoSapato();
  preencherCatalogoPghome();


/*animação dos slider pagina home*/
const categoriaUl = document.querySelectorAll(".categoria ul");
const anteriorButton = document.querySelectorAll(".anterior");
const proximoButton = document.querySelectorAll(".proximo");

anteriorButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    categoriaUl[index].scrollLeft -= 353;
  });
});

proximoButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    categoriaUl[index].scrollLeft += 353;
  });
})




