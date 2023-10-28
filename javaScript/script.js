
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
