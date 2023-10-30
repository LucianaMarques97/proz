obterItensCatalogo: (categoria = 'calca') => {
  const filtro = MENU[categoria];
  console.log(filtro);


}















// Acesso à div onde queremos inserir as informações
const divBlusa = document.querySelector('.blusas');
const divCalca = document.querySelector('.calcas');
const divSapato = document.querySelector('.sapatos');


// Função para preencher dinamicamente o catálogo de blusas
function preencherCatalogoBlusas() {
    // Iterar sobre as blusas
    ROUPAS.blusas.forEach((blusa) => {
        // Criar elementos HTML dinamicamente
        const novaLi = document.createElement('li');
        const link = document.createElement('a');
        const imagem = document.createElement('img');
      

        // Definir os atributos dos elementos
        link.href = './html/categoria.html'; // Link pode ser alterado para o link correto
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
  // Iterar sobre as blusas
  ROUPAS.calcas.forEach((calca) => {
      // Criar elementos HTML dinamicamente
      const novaLi = document.createElement('li');
      const link = document.createElement('a');
      const imagem = document.createElement('img');
      
      // Definir os atributos dos elementos
      link.href = './html/categoria.html'; // Link pode ser alterado para o link correto
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
    // Iterar sobre as blusas
  ROUPAS.sapatos.forEach((sapato) => {
    // Criar elementos HTML dinamicamente
    const novaLi = document.createElement('li');
    const link = document.createElement('a');
    const imagem = document.createElement('img');
    
    // Definir os atributos dos elementos
    link.href = './html/categoria.html'; // Link pode ser alterado para o link correto
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
  

  preencherCatalogoBlusas();
  preencherCatalogoCalca();
  preencherCatalogoSapato();
  




/*animação dos slider*/
const categoriaUl = document.querySelectorAll(".categoria ul");
const anteriorButton = document.querySelectorAll(".anterior");
const proximoButton = document.querySelectorAll(".proximo");

anteriorButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    categoriaUl[index].scrollLeft -= 350;
  });
});

proximoButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    categoriaUl[index].scrollLeft += 350;
  });
});


