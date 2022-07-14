/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const carRender = (data) => {
  const { brand, models } = data;
  const card = document.createElement("div");
  const brandEl = document.createElement("div");
  const modelEl = document.createElement("div");

  brandEl.textContent = brand;
  modelEl.textContent = models;

  card.append(brandEl, modelEl);
  card.classList = "car-card";
  brandEl.classList = "brand";
  modelEl.classList = "model";

  const outputDiv = document.querySelector("#output");

  outputDiv.append(card);
};

fetch(ENDPOINT)
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);
    response.forEach((cars) => carRender(cars));
  })
  .catch((error) => {
    console.error(error);
  });
