/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function kgToLb(e) {
  return Number(e) * 2.2046;
}

function kgToG(e) {
  return Number(e) / 0.001;
}

function kgToOz(e) {
  return Number(e) * 35.274;
}

const converterForm = document.querySelector("form");
converterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const kg = document.getElementById("search");
  const kilograms = kg.value;

  const output = document.getElementById("output");
  output.textContent = `Pounds(lb): ${kgToLb(kilograms)}lb, grams(g): ${kgToG(
    kilograms
  )}g, Oz: ${kgToOz(kilograms)}oz`;
});
