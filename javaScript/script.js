
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






/* Templetes */


loja.templates = {
  sliderHome:
            `<div class="bg-1">
            <h2 class="produto-blusa">\${categoria}</h2>
            <section class="categoria-blusa categoria">
              
              <ul >
                <li><a href="./html/categoria.html"><img src="./img/blusa1.jpg" alt="blusa"></a></li>
                <li><a href="./html/categoria.html"><img src="./img/blusa2.jpg" alt="blusa"></a></li>
                <li><a href="./html/categoria.html"><img src="./img/blusa3.jpg" alt="blusa"></a></li>
                <li><a href="./html/categoria.html"><img src="./img/blusa4.jpg" alt="blusa"></a></li>
                <li><a href="./html/categoria.html"><img src="./img/blusa2.jpg" alt="blusa"></a></li>
                <li><a href="./html/categoria.html"><img src="./img/blusa1.jpg" alt="blusa"></a></li>
              </ul>
              
            </section>
            <div class="btn">
              <a  class="anterior botao-comprar"> <</a>
              <a class="proximo botao-comprar">></a>
            </div>
          </div>`

}