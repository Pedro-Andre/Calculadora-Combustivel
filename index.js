const tipoCombustivel = document.getElementById("tipo-combustivel");
const precoCombustivel = document.getElementById("preco");
const consumo = document.getElementById("consumo");
const distancia = document.getElementById("distancia");
const valorTotal = document.getElementById("valor-total");
const calcBtn = document.querySelector(".calc");
const clearBtn = document.querySelector(".clear");

valorTotal.innerHTML = "0.00";

// CALCULATION
const calcViagem = function () {
  const consumoPorLitro = distancia.value / consumo.value;

  const valorViagem = (consumoPorLitro * precoCombustivel.value).toFixed(2);

  valorTotal.innerHTML = valorViagem;

  console.log(`Valor viagem:  ${valorViagem}`);
};

// CLEAR INPUTS
const clearInputs = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].value = "";
  }
};

// EXECUTION
calcBtn.addEventListener("click", (e) => {
  e.preventDefault();

  calcViagem();

  console.log(
    `tipo: ${tipoCombustivel.value} / preco: ${precoCombustivel.value} / consumo: ${consumo.value} / distancia: ${distancia.value}`
  );
});

clearBtn.addEventListener("click", () => {
  clearInputs([tipoCombustivel, precoCombustivel, consumo, distancia]);
});
