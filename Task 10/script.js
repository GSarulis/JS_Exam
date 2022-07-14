/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

const showUser = document.querySelector("#btn");

const renderCards = (info) => {
  const outputLogin = document.createElement("h3");
  outputLogin.textContent = info.login;
  const outputImg = (document.createAttribute("img").src = info.avatar_url);
  // outputImg.src = info.avatar_url;
  // outputImg.alt = info.avatar_url;

  document.querySelector("#message").textContent = "";

  const card = document.createElement("div");
  card.style.width = "30%";
  card.style.borderRadius = "12px";
  card.style.padding = "12px";
  card.style.margin = "12px";
  card.style.display = "flex";
  card.style.background = "#FC2E20";
  card.style.boxShadow = "3px 6px 9px #FC2E20";

  const output = document.querySelector("#output");
  output.style.display = "flex";
  output.style.flexWrap = "wrap";
  card.append(outputLogin, outputImg);
  output.append(card);
};
