/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const buttonSelect = document.querySelector("#btn");

const usersRender = (data) => {
  const loginEl = document.createElement("h2");
  const imageEl = document.createElement("img");
  imageEl.className = "imageCard";

  loginEl.textContent = data.login;
  imageEl.src = data.avatar_url;

  const divA = document.createElement("div");
  const outputFolder = document.querySelector("#output");
  divA.className = "output";
  divA.append(loginEl, imageEl);
  outputFolder.append(divA);

  const removeText = document.querySelector("#message");
  removeText.textContent = "";
};

buttonSelect.addEventListener("click", () => {
  fetch(ENDPOINT)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
      response.forEach((array) => usersRender(array));
    })
    .catch((error) => {
      console.log(error);
    });
});
