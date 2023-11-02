
// Acesso à div onde queremos inserir as informações
  const divBlusa = document.querySelector('.blusas');
  const divCalca = document.querySelector('.calcas');
  const divSapato = document.querySelector('.sapatos');


// Função para preencher dinamicamente o catálogo de blusas da pg home
function preencherCatalogoBlusas(categoria, tipo, div) {
  // Iterar sobre as blusas
  categoria.slice(0, 8).forEach((elemento) => {
    // Criar elementos HTML dinamicamente    
    const novaLi = document.createElement('li');
    const link = document.createElement('a');
    const imagem = document.createElement('img');


    // Definir os atributos dos elementos
    link.href = `./html/${elemento.categoria}.html`;
    imagem.src = elemento.img;
    imagem.alt = `${tipo}`;
    console.log(imagem.alt)

    // Adicionar a imagem ao link e o link à nova li
    link.appendChild(imagem);
    novaLi.appendChild(link);

    // Adicionar a nova li à lista existente no HTML
    const ul = div.querySelector(`#${tipo}Home`);
    ul.appendChild(novaLi);
  });
}


//

//Chamar a função para preencher dinamicamente o catálogo de blusas
preencherCatalogoBlusas(ROUPAS.blusas, "blusa", divBlusa)
preencherCatalogoBlusas(ROUPAS.calcas, "calca", divCalca)
preencherCatalogoBlusas(ROUPAS.sapatos, "sapato", divSapato)


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



