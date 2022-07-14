/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive = () => {
    return this.budget > 10000000;
  };
}
const avatar = new Movie(
  "Avatar: The Way of Water",
  "James Cameron",
  250000000
);
// console.log(avatar.wasExpensive());
console.log(
  `${avatar.title}, directed by ${
    avatar.director
  }, is expensive: ${avatar.wasExpensive(avatar)}`
);
