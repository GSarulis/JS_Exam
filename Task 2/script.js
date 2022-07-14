/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let numberCount = 0;

const addNumbers = document.getElementById("btn__element");

addNumbers.addEventListener("click", () => {
  numberCount++;

  const numberShow = document.getElementById("btn__state");

  numberShow.textContent = numberCount;
});
